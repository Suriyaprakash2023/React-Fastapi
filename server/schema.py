from pydantic import BaseModel,EmailStr,field_validator
from datetime import date
from fastapi import UploadFile
from typing import Optional
import re
import base64
# Pydantic schema for User
import base64
from typing import Optional
from datetime import date
from pydantic import BaseModel

# Pydantic model for user registration
class RegisterSchema(BaseModel):
    username: str
    email: EmailStr
    password: str
    mobile_number: str
    dateOfBirth: Optional[date] = None
    profilePic: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "username": "john_doe",
                "email": "john.doe@example.com",
                "password": "securepassword123",
                "mobile_number": "+1234567890",
                "dateOfBirth": "1990-01-01",
                "profilePic": "data:image/png;base64,iVBORw0KGgo..."
            }
        }

class UserResponse(BaseModel):
    username: str
    email: str
    mobile_number: str
    message: str

    class Config:
        orm_mode = True


class UserOut(BaseModel):
    id: int
    username: str
    email: str
    mobile_number: Optional[str] = None
    dateOfBirth: Optional[date] = None
    userPic: Optional[str] = None  # Base64 encoded image
    profile_pic_type: Optional[str] = None
    
    class Config:
        orm_mode = True
    
    @classmethod
    def from_orm(cls, user):
        user_dict = user.__dict__.copy()
        
        # Convert userPic from bytes to base64 string
        if user_dict.get("userPic") is not None:
            try:
                if isinstance(user_dict["userPic"], bytes):
                    # Encode bytes to base64 and decode to UTF-8 string
                    user_dict["userPic"] = base64.b64encode(user_dict["userPic"]).decode('utf-8')
                else:
                    print(f"Warning: userPic is not bytes, got {type(user_dict['userPic'])}")
                    user_dict["userPic"] = None
            except Exception as e:
                print(f"Error encoding userPic to base64: {e}")
                user_dict["userPic"] = None
        
        # Ensure dateOfBirth is in the correct format
        if user_dict.get("dateOfBirth") is not None and not isinstance(user_dict["dateOfBirth"], date):
            print(f"Warning: dateOfBirth is not a date object: {type(user_dict['dateOfBirth'])}")
            user_dict["dateOfBirth"] = None
        
        return cls(**user_dict)
    

class UserLogin(BaseModel):
  email:EmailStr  
  password:str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    mobile_number: Optional[str] = None
    dateOfBirth: Optional[date] = None
    profilePic: Optional[str] = None  # Base64 encoded image
    coverPic: Optional[str] = None  # Base64 encoded image





class OtherUser(BaseModel):
    id: int
    username: str
    email: str
    mobile_number: Optional[str] = None
    dateOfBirth: Optional[date] = None
    userPic: Optional[str] = None  # Base64 encoded image
    profile_pic_type: Optional[str] = None
    
    class Config:
        orm_mode = True
    
    @classmethod
    def from_orm(cls, user):
        user_dict = user.__dict__.copy()
        
        # Convert userPic from bytes to base64 string
        if user_dict.get("userPic") is not None:
            try:
                if isinstance(user_dict["userPic"], bytes):
                    # Encode bytes to base64 and decode to UTF-8 string
                    user_dict["userPic"] = base64.b64encode(user_dict["userPic"]).decode('utf-8')
                else:
                    print(f"Warning: userPic is not bytes, got {type(user_dict['userPic'])}")
                    user_dict["userPic"] = None
            except Exception as e:
                print(f"Error encoding userPic to base64: {e}")
                user_dict["userPic"] = None
        
        # Ensure dateOfBirth is in the correct format
        if user_dict.get("dateOfBirth") is not None and not isinstance(user_dict["dateOfBirth"], date):
            print(f"Warning: dateOfBirth is not a date object: {type(user_dict['dateOfBirth'])}")
            user_dict["dateOfBirth"] = None
        
        return cls(**user_dict)
    