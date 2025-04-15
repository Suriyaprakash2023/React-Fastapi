from fastapi import FastAPI,APIRouter,HTTPException,status,Depends,Form,UploadFile,File
from fastapi.middleware.cors import CORSMiddleware
from model import User,Friendship,FriendshipStatus
from database import SessionLocal,get_db
from pydantic import BaseModel,EmailStr
from sqlalchemy.orm import Session
from schema import UserLogin,UserOut,OtherUser,PublicUserProfile
from funtions import hash_password,verify_password,create_access_token,ACCESS_TOKEN_EXPIRE_MINUTES
from  datetime import date
import datetime
from typing import Optional
from fastapi.security import OAuth2PasswordBearer
import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from typing import List
from funtions import SECRET_KEY, ALGORITHM,oauth2_scheme

app=FastAPI()
router = APIRouter()
app.include_router(router,  tags=["users"])

app.add_middleware(
  CORSMiddleware,
  allow_credentials = True,
  allow_origins=["http://localhost:5173"],
  allow_methods=["*"],
  allow_headers=["*"],
)




class UserResponse(BaseModel):
    username: str
    email: str
    mobile_number: str
    message: str

@app.post("/register")
async def user_register(
    userName: str = Form(...), 
    email: str = Form(...), 
    password: str = Form(...), 
    mobile_number: str = Form(...),
    dateOfBirth: Optional[date] = Form(None),
    profilePic: UploadFile = File(None),  # Make file optional with default=None
    db: Session = Depends(get_db)
):
    # Check if the email already exists in the database
    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password before saving
    hashed_password = hash_password(password)

    # Initialize variables for profile pic
    file_content = None
    mime_type = None
    
    # Process the profile picture if provided
    if profilePic:
        # Validate file size (5MB limit)
        file_size = 0
        MAX_SIZE = 10 * 1024 * 1024  # 5MB
        
        content = await profilePic.read()
        file_size = len(content)
        
        if file_size > MAX_SIZE:
            raise HTTPException(status_code=400, detail="File too large (max 10MB)")
        
        # Validate file type
        mime_type = profilePic.content_type
        if not mime_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        file_content = content

    # Create the user object to store in the database
    db_user = User(
        username=userName,
        email=email,
        password=hashed_password,
        mobile_number=mobile_number,
        dateOfBirth=dateOfBirth,
        userPic=file_content,  # May be None if no file was uploaded
        profile_pic_type=mime_type
    )

    # Save the user to the database
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return {"message": "User created successfully"}


import io
from fastapi.responses import StreamingResponse


@app.get("/users/{user_id}/profile-pic")
async def get_user_profile_pic(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user or not user.userPic:
        raise HTTPException(status_code=404, detail="Profile picture not found")
    
    # Return as a StreamingResponse for better performance with large images
    return StreamingResponse(
        io.BytesIO(user.userPic),
        media_type=user.profile_pic_type or "image/jpeg"
    )


@app.post("/login")
async def login_view(user:UserLogin,db:Session=Depends(get_db)):
  db_user = db.query(User).filter(User.email == user.email).first()
  if not db_user:
      raise HTTPException(status_code=400, detail="Invalid credentials.")
  
  if not verify_password(user.password,db_user.password):
     raise HTTPException(status_code=400,detail="Password is not Defind...")
  
  access_token_expires = datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(data={"sub":db_user.email},expires_delta=access_token_expires)

  return {"access_token":access_token,"token_type":"bearer"}

# Route to get the currently authenticated user
# Dummy function to simulate getting a user from the database


# Dummy user for testing
fake_users_db = {
    "johndoe@example.com": {"id": 1, "email": "johndoe@example.com", "username": "johndoe", "password": "hashed_password"}
}

def get_user_from_token(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")

        user = db.query(User).filter(User.email == email).first()
        if user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return user

    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    
@app.get("/users/me", response_model=UserOut)
async def read_users_me(current_user: User = Depends(get_user_from_token), db: Session = Depends(get_db)):
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials"
        )
    
    try:
        # Refresh the user from the database to ensure latest data
        db.refresh(current_user)
        # Explicitly convert to UserOut to ensure proper transformation
        return UserOut.from_orm(current_user)
    except Exception as e:
        print(f"Error retrieving user: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to retrieve user data: {str(e)}"
        )


@app.patch("/edit-profile", response_model=UserOut)
async def update_user(
    username: Optional[str] = None,
    mobile_number: Optional[str] = None,
    dateOfBirth: Optional[date] = None,
    profilePic: UploadFile = File(None),
    coverPic: UploadFile = File(None),
    current_user: User = Depends(get_user_from_token),
    db: Session = Depends(get_db)
):
    # Update only provided fields
    if username:
        current_user.username = username
    if mobile_number:
        current_user.mobile_number = mobile_number
    if dateOfBirth:
        current_user.dateOfBirth = dateOfBirth
    
    # Handle profile picture upload
    if profilePic:
        file_content = await profilePic.read()
        if len(file_content) > 10 * 1024 * 1024:  # 10MB limit
            raise HTTPException(status_code=400, detail="File too large (max 10MB)")
        if not profilePic.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        current_user.userPic = file_content
        current_user.profile_pic_type = profilePic.content_type

    if coverPic:
        coverPic_file_content = await coverPic.read()
        if len(coverPic_file_content) > 10 * 1024 * 1024:  # 10MB limit
            raise HTTPException(status_code=400, detail="File too large (max 10MB)")
        if not coverPic.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        current_user.coverPic = coverPic_file_content

    db.commit()
    db.refresh(current_user)
    return UserOut.from_orm(current_user)



@app.get("/others-user", response_model=List[OtherUser])
async def get_other_users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_user_from_token)
):
    users = db.query(User).filter(User.id != current_user.id).all()

    output = []
    for user in users:
        # Check if there's a friendship between current_user and this user
        friendship = db.query(Friendship).filter(
            ((Friendship.sender_id == current_user.id) & (Friendship.receiver_id == user.id)) |
            ((Friendship.sender_id == user.id) & (Friendship.receiver_id == current_user.id))
        ).first()

        status = friendship.status.value if friendship else None
        role = None

        if friendship:
            if friendship.sender_id == current_user.id:
                role = "sender"
            elif friendship.receiver_id == current_user.id:
                role = "receiver"

        output.append(OtherUser.from_orm(user, status=status, role=role))

    return output



@app.post("/send-request/{receiver_id}")
def send_friend_request(
    receiver_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_user_from_token)
):
    # Check if request already exists
    existing = db.query(Friendship).filter_by(
        sender_id=current_user.id,
        receiver_id=receiver_id
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Request already sent")

    request = Friendship(
        sender_id=current_user.id,
        receiver_id=receiver_id,
        status='send_request'
    )
    db.add(request)
    db.commit()
    db.refresh(request)
    return {"message": "Friend request sent", "request_id": request.id}


@app.delete("/cancel-request/{receiver_id}")
def cancel_friend_request(
    receiver_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_user_from_token)
):
    request = db.query(Friendship).filter_by(
        sender_id=current_user.id,
        receiver_id=receiver_id,
        status=FriendshipStatus.send_request
    ).first()

    if not request:
        raise HTTPException(status_code=404, detail="Request not found")

    db.delete(request)
    db.commit()
    return {"message": "Request cancelled"}


@app.get("/user-profile/{user_id}", response_model=PublicUserProfile)
def get_user_profile(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Convert userPic from bytes to base64
    user_dict = user.__dict__.copy()

    if user_dict.get("userPic") and isinstance(user_dict["userPic"], bytes):
        import base64
        user_dict["userPic"] = base64.b64encode(user_dict["userPic"]).decode('utf-8')
    
    return PublicUserProfile(**user_dict)


@app.get("/friend-requests", response_model=List[OtherUser])
def get_friend_requests(
    current_user: User = Depends(get_user_from_token),
    db: Session = Depends(get_db)
):
    incoming = (
        db.query(User)
        .join(Friendship, Friendship.sender_id == User.id)
        .filter(Friendship.receiver_id == current_user.id)
        .filter(Friendship.status == FriendshipStatus.send_request)
        .all()
    )

    return [OtherUser.from_orm(user, status="send_request", role="receiver") for user in incoming]

@app.post("/accept-request")
def accept_friend_request(
    sender_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_user_from_token)
):
    friendship = db.query(Friendship).filter(
        Friendship.sender_id == sender_id,
        Friendship.receiver_id == current_user.id,
        Friendship.status == FriendshipStatus.send_request
    ).first()

    if not friendship:
        raise HTTPException(status_code=404, detail="Friend request not found")

    friendship.status = FriendshipStatus.accepted
    db.commit()
    db.refresh(friendship)

    return {"message": "Friend request accepted"}


@app.delete("/reject-request")
def reject_friend_request(
    sender_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_user_from_token)
):
    friendship = db.query(Friendship).filter(
        Friendship.sender_id == sender_id,
        Friendship.receiver_id == current_user.id,
        Friendship.status == FriendshipStatus.send_request
    ).first()

    if not friendship:
        raise HTTPException(status_code=404, detail="Friend request not found")

    db.delete(friendship)
    db.commit()

    return {"message": "Friend request rejected"}
