import React,{useEffect, useState} from 'react'
import Header from '../Header'
import FriendsNav from './FriendsNav'
import axios from 'axios';
import { BASE_URL } from '../../context/data';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
const Suggestions = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const token = localStorage.getItem('token');
  const [otherUsers, setOtherUsers] = useState([]); // ✅ default is array
  const [loading, setLoading] = useState(true);
  const [sentRequests, setSentRequests] = useState(new Set());
const fetchOtherUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/others-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOtherUsers(res.data);
    } catch (error) {
      console.error("Error fetching other users:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendRequest = async (receiverId) => {
    try {
      await axios.post(`${BASE_URL}/send-request/${receiverId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // ✅ Update request status locally
      setOtherUsers(prev =>
        prev.map(user =>
          user.id === receiverId ? { ...user, status: "send_request" } : user
        )
      );
      setSuccessMessage("Request sent successfully!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // ✅ Clear message after 3 seconds
    } catch (err) {
      console.error("Error sending request:", err);
      alert(err.response?.data?.detail || "Failed to send request");
    }
  };

  const cancelRequest = async (receiverId) => {
    try {
      await axios.delete(`${BASE_URL}/cancel-request/${receiverId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage("Request cancelled successfully!");
      setTimeout(() => {
        setSuccessMessage(null);
      }
      , 3000); // ✅ Clear message after 3 seconds
      // ✅ Revert status locally
      setOtherUsers(prev =>
        prev.map(user =>
          user.id === receiverId ? { ...user, status: null } : user
        )
      );
    } catch (err) {
      console.error("Cancel request error:", err);
    }
  };

  useEffect(() => {
    fetchOtherUsers();
  }, []); // ✅ only run once on mount
  console.log("otherUsers", otherUsers);
  const getProfilePicSrc = (user) => {
    if (user?.userPic && user?.profile_pic_type) {
      return `data:${user.profile_pic_type};base64,${user.userPic}`;
    }
    return '/src/assets/images/avatar-1.png';
  };



  const acceptRequest = async (senderId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${BASE_URL}/accept-request`, {
        sender_id: senderId,
        status: "accepted",
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setOtherUsers(prev =>
        prev.map(user =>
          user.id === senderId ? { ...user, status: "accepted", role: null } : user
        )
      );
      setSuccessMessage("Friend request accepted!");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error("Error accepting request:", err);
    }
  };
  
  const rejectRequest = async (senderId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/reject-request`,{
        sender_id: senderId,
        status: "rejected",
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setOtherUsers(prev =>
        prev.filter(user => user.id !== senderId)
      );
      setSuccessMessage("Friend request rejected.");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error("Error rejecting request:", err);
    }
  };
  


  if (loading) return <p>Loading...</p>;

  if (otherUsers.length === 0) {
    return <p>No users found.</p>; // ✅ empty state
  }


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
                    {successMessage && (
                    <Alert
                      severity="success"
                      className="text-white mb-3"
                      style={{ backgroundColor: "#28b528" }}
                    >
                      {successMessage}
                    </Alert>
                  )}    
                    <div className="row">
                    {otherUsers.map(user => (
                    <div key={user.id} className="col-md-5 col-sm-6 col-lg-4 col-8 mb-4">
                      <div className="single-box p-5">
                        <div className="avatar">
                        <Link to={`/user-profile/${user.id}`}>
                          <img
                            className="avatar-img"
                            style={{ height: '250px', width: '250px' }}
                            src={getProfilePicSrc(user)}
                            alt="avatar"
                          />
                          </Link>
                        </div>
                        <Link to={`/user-profile/${user.id}`}>
                          <h6 className="m-0 mb-2 mt-3">{user.username}</h6>
                        </Link>

                        <div className="d-center gap-2 mt-4">
                          {/* 👇 Conditional button rendering based on user.status */}
                          {user.status === "send_request" && user.role === "sender" ? (
                              <>
                                <button className="cmn-btn" style={{ backgroundColor: "green" }}>
                                  <i className="material-symbols-outlined mat-icon fs-xl">check_circle</i>
                                  Sent
                                </button>
                                <button className="cmn-btn alt" onClick={() => cancelRequest(user.id)}>Cancel</button>
                              </>
                              ) : user.status === "send_request" && user.role === "receiver" ? (
                              <>
                                <button className="cmn-btn" onClick={() => acceptRequest(user.id)}>
                                  <i className="material-symbols-outlined mat-icon fs-xl">person_add</i>
                                  Accept
                                </button>
                                <button className="cmn-btn alt" onClick={() => rejectRequest(user.id)}>Reject</button>
                              </>
                            ) : (
                              <button className="cmn-btn" onClick={() => sendRequest(user.id)}>
                                <i className="material-symbols-outlined mat-icon fs-xl">person_add</i>
                                Add
                              </button>
                            )}

                        </div>
                      </div>
                    </div>
                  ))}

                    </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Suggestions
