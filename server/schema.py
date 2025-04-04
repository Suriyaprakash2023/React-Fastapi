from pydantic import BaseModel,EmailStr,field_validator
from datetime import date
from fastapi import UploadFile
from typing import Optional
import re
import base64

# Pydantic model for user registration
# class UserRegister(BaseModel):
#     username: str
#     email: EmailStr
#     password: str
#     mobile_number: str
#     dateOfBirth: Optional[date]
#     profilePic: Optional[UploadFile]  # For file uploads

class UserResponse(BaseModel):
    username: str
    email: str
    mobile_number: str
    message: str

    class Config:
        orm_mode = True

# Pydantic schema for User
class UserOut(BaseModel):
    id: int
    username: str
    email: str
    mobile_number: Optional[str] = None
    dateOfBirth: Optional[date] = None
    userPic: Optional[str] = None  # This will store base64 encoded image

    class Config:
        orm_mode = True

    @classmethod
    def from_orm(cls, user):
        user_dict = user.__dict__.copy()  # Create a copy to avoid modifying the original
        
        # Handle userPic conversion only if it exists
        if user_dict.get("userPic"):
            user_dict["userPic"] = base64.b64encode(user_dict["userPic"]).decode('utf-8')
        
        # Ensure dateOfBirth is properly handled
        if user_dict.get("dateOfBirth") is None:
            user_dict["dateOfBirth"] = None
            
        return super().from_orm(user)
    
    # # Username validation
    # @field_validator('username')
    # @classmethod
    # def username_validation(cls, v: str) -> str:
    #     if len(v) < 3 or len(v) > 50:
    #         raise ValueError('Username must be between 3 and 50 characters')
    #     if not v.isalnum():
    #         raise ValueError('Username must contain only alphanumeric characters')
    #     return v

    # # Password validation
    # @field_validator('password')
    # @classmethod
    # def password_validation(cls, v: str) -> str:
    #     if len(v) < 8:
    #         raise ValueError('Password must be at least 8 characters')
    #     return v

    # # Mobile number validation
    # @field_validator('mobile_number')
    # @classmethod
    # def mobile_validation(cls, v: str) -> str:
    #     pattern = r'^\+?[1-9]\d{9,14}$'  # Basic international phone number validation
    #     if not re.match(pattern, v):
    #         raise ValueError('Invalid mobile number format')
    #     return v
    

class UserLogin(BaseModel):
  email:EmailStr  
  password:str