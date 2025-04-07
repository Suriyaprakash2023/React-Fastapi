import React from 'react'
import Header from '../Header'
import FriendsNav from './FriendsNav'
const FriendRequest = () => {
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-2.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Cody Fisher</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-3.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Leslie Alexander</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-4.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Jerome Bell</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-5.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Kathryn Murphy</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-6.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Savannah Nguyen</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-7.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Darlene Robertson</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-8.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Arlene McCoy</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-9.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Bessie Cooper</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-10.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Darlene Robertson</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-11.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Arlene McCoy</h6></a>
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
                        <div className="col-xl-4 col-sm-6 col-8">
                            <div className="single-box p-5">
                                <div className="avatar">
                                    <img className="avatar-img w-100" src="/src/assets/images/confirm-friend-12.png" alt="avatar"/>
                                </div>
                                <a ><h6 className="m-0 mb-2 mt-3">Bessie Cooper</h6></a>
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
