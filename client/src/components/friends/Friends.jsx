import React from 'react'
import Header from '../Header'
import FriendsNav from './FriendsNav'
const Friends = () => {
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
                       
                        <div className="col-xxl-3 col-md-5 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/all-friend-img-1.png" alt="avatar"/>
                                </div>
                                <a href="public-profile-post.html"><h6 className="m-0 mb-2 mt-3">Guy Hawkins</h6></a>
                                <div className="btn-area mt-3">
                                    <button className="cmn-btn">View</button>
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

export default Friends
