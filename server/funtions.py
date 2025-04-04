from passlib.context import CryptContext
import datetime
from typing import Optional
from jose import JWTError,jwt
from datetime import timedelta
from datetime import datetime
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel,EmailStr


pwd_context =CryptContext(schemes=['bcrypt'],deprecated="auto")

SECRET_KEY ="KJFS897SD98SDHS98SDH98"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Token expiration time

# OAuth2PasswordBearer is used to get the token from the Authorization header
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Hashing function
def hash_password(password: str) -> str:
    return pwd_context.hash(password)


# Verification function
def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return pwd_context.verify(plain_password, hashed_password)
    except ValueError:
        return False
    

def get_password_hash(password):
  return pwd_context.hash(password)

# Function to create access token
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=15)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt



class User(BaseModel):
    username: str



