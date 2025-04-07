from pydantic import BaseModel,EmailStr
from typing import List
from sqlalchemy import Column,Integer,String,Date,LargeBinary, DateTime, Enum, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from database import engine
import enum
from sqlalchemy.orm import relationship
from datetime import datetime

fake_db= {}


Base = declarative_base()

Base.metadata.create_all(bind=engine)


# 1. Updated User Model (models.py)
class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), nullable=True, index=True)
    mobile_number = Column(String(50), nullable=True, index=True)
    email = Column(String(255), unique=True, index=True)
    password = Column(String)
    dateOfBirth = Column(Date, nullable=True)
    userPic = Column(LargeBinary, nullable=True)
    coverPic = Column(LargeBinary, nullable=True)
    profile_pic_type = Column(String(50), nullable=True)  # Store mime type




class FriendshipStatus(str, enum.Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"
    blocked = "blocked"
    send_request = "send_request"

class Friendship(Base):
    __tablename__ = "friendships"

    id = Column(Integer, primary_key=True, index=True)
    sender_id = Column(Integer, ForeignKey("user.id"))
    receiver_id = Column(Integer, ForeignKey("user.id"))
    status = Column(Enum(FriendshipStatus), default=FriendshipStatus.pending)
    created_at = Column(DateTime, default=datetime.utcnow)

    sender = relationship("User", foreign_keys=[sender_id], backref="sent_requests")
    receiver = relationship("User", foreign_keys=[receiver_id], backref="received_requests")
