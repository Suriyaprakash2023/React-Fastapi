from pydantic import BaseModel,EmailStr
from typing import List
from sqlalchemy import Column,Integer,String,Date,LargeBinary
from sqlalchemy.ext.declarative import declarative_base
from database import engine
fake_db= {}


Base = declarative_base()

class User(Base):
  __tablename__="user"

  id = Column(Integer,primary_key=True,index=True)
  username = Column(String(255),nullable=True,index=True)
  mobile_number = Column(String(50),nullable=True,index=True)
  email = Column(String(255),unique=True,index=True)
  password = Column(String)
  dateOfBirth = Column(Date, nullable=True)
  userPic = Column(LargeBinary, nullable=True)  # For binary data (file)
  
Base.metadata.create_all(bind=engine)
