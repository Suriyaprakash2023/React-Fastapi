import React,{useEffect, useState} from 'react'
import Header from '../Header'
import FriendsNav from './FriendsNav'
import axios from 'axios';
import { BASE_URL } from '../../context/data';
const Suggestions = () => {
  const [requestSent, setRequestSent] = useState(false); // ← track button state

  const token = localStorage.getItem('token');
  const [otherUsers, setOtherUsers] = useState([]); // ✅ default is array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // or however you auth
        const res = await axios.get(`${BASE_URL}/with-others`, {
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


    

    fetchOtherUsers();
  }, []);


  const getProfilePicSrc = (user) => {
    if (user?.userPic && user?.profile_pic_type) {
      return `data:${user.profile_pic_type};base64,${user.userPic}`;
    }
    return '/src/assets/images/avatar-1.png';
  };



  if (loading) return <p>Loading...</p>;

  if (otherUsers.length === 0) {
    return <p>No users found.</p>; // ✅ empty state
  }

  const sendRequest = async (receiverId) => {
    try {
      const res = await axios.post(`${BASE_URL}/send-request/${receiverId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Friend request sent!");
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
      setRequestSent(false); // ✅ reset state
    } catch (err) {
      console.error("Cancel request error:", err);
    }
  };
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
                        
                    <div className="row">
                      {otherUsers.map(user => (
                        <div key={user.id} className=" col-md-5 col-sm-6 col-lg-4 col-8 mb-4">
                          <div className="single-box p-5">
                            <div className="avatar">
                              <img className="avatar-img "style={{ height: '250px', width: '250px' }} src={getProfilePicSrc(user)} alt="avatar" />
                            </div>
                            <a href={`/profile/${user.id}`}><h6 className="m-0 mb-2 mt-3">{user.username}</h6></a>
                            <div className="d-center gap-2 mt-4">
                              {requestSent ? (
                                <button className="cmn-btn" onClick={() => cancelRequest(user.id)}>
                                  <i className="material-symbols-outlined mat-icon fs-xl"> check_circle </i>
                                  Sent
                                </button>
                              ) : (
                                <button className="cmn-btn" onClick={() => sendRequest(user.id)}>
                                  <i className="material-symbols-outlined mat-icon fs-xl"> person_add </i>
                                  Add
                                </button>
                              )}
                              <button className="cmn-btn alt">Delete</button>
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
