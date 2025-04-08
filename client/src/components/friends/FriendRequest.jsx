import React from 'react'
import Header from '../Header'
import FriendsNav from './FriendsNav'
import { BASE_URL } from '../../context/data'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const FriendRequest = () => {

    const [requests, setRequests] = useState([]);
      
    useEffect(() => {
        const fetchRequests = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${BASE_URL}/friend-requests`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            setRequests(res.data);
        } catch (err) {
            console.error("Failed to load friend requests:", err);
        }
        };
    
        fetchRequests();
    }, []);
  return (
    <>
      {/*  Header Start */}
        <Header/>
      {/*  Header End */}
      <main className="main-content">
        <div className="container">
            <div className="row">

                {/* SideNav Start */}
                    <FriendsNav/>
                {/* SideNav End */}

                <div className="col-xl-9 col-lg-8">
                    <div className="row cus-mar friend-request">

                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-1.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Arest Liolestin</h6></a>
                                <div className="friends-list d-center gap-1 text-center">
                                    <ul className="d-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                    </ul>
                                    <span className="smtxt m-0">10 mutual friends</span>
                                </div>
                                <div className="d-center gap-2 mt-4">
                                    <button className="cmn-btn">Confirm</button>
                                    <button className="cmn-btn alt">Delete</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  </>
  )
}

export default FriendRequest
