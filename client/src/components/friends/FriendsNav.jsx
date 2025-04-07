import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserProvider'; // Adjust path as necessary
const FriendsNav = () => {
    const location = useLocation();

    const { user, logout } = useUser();
    
      if (!user) {
        return <div>Loading user data...</div>;
    }
    
    
    // Construct profile picture source with safe access
    const profilePicSrc = user && user.userPic && user.profile_pic_type
    ? `data:${user.profile_pic_type};base64,${user.userPic}`
    : '/src/assets/images/avatar-1.png';
    
  return (
    <>
      <div className="col-xl-3 col-lg-4">
          <div className="d-block d-lg-none">
              <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
                  <i className="material-symbols-outlined mat-icon"> tune </i>
                  <span>My profile</span>
              </button>
          </div>
          <div className="profile-sidebar cus-scrollbar p-5">
              <div className="d-block d-lg-none position-absolute end-0 top-0">
                  <button className="button profile-close">
                      <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                  </button>
              </div>
              <div className="profile-pic d-flex gap-2 align-items-center">
                  <div className="avatar position-relative">
                      <img className="avatar-img max-un rounded-circle"  src={user.userPic} style={{ Width: '50px', maxHeight: '50px' }} alt="avatar"/>
                  </div>
                  <div className="text-area">
                      <h6 className="m-0 mb-1"><a >{user.username}</a></h6>
                      <p className="mdtxt">{user.email}</p>
                  </div>
              </div>
              <ul className="profile-link mt-7 mb-7 pb-7">
                  <li>
                        <Link to="/index" className={`d-flex gap-4 ${location.pathname === '/index' ? 'active' : ''}`}>
                            <i className="material-symbols-outlined mat-icon">home</i>
                            <span>Home</span>
                        </Link>
                    </li>
                  <li>
                    <Link
                        to="/friend-request"
                        className={`d-flex gap-4 ${location.pathname === '/friend-request' ? 'active' : ''}`}>
                          <i className="material-symbols-outlined mat-icon"> person_add </i>
                          <span>Friend Request</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                        to="/suggestions"
                        className={`d-flex gap-4 ${location.pathname === '/suggestions' ? 'active' : ''}`}>
                          <i className="material-symbols-outlined mat-icon"> person_add </i>
                          <span>Suggestions</span>
                    </Link>
                  </li>
                  <li>
                      <Link to="/friends"    className={`d-flex gap-4 ${location.pathname === '/friends' ? 'active' : ''}`}>
                          <i className="material-symbols-outlined mat-icon"> person </i>
                          <span>All Friend</span>
                      </Link>
                  </li>
                  <li>
                      <a  className="d-flex gap-4">
                          <i className="material-symbols-outlined mat-icon"> lock </i>
                          <span>Block List</span>
                      </a>
                  </li>
              </ul>
              <div className="mb-4">
                  <h6 className="d-inline-flex">
                      Contact
                  </h6>
              </div>
              <div className="d-flex flex-column gap-6">
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-9.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Piter Maio</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Floyd Miles</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-8.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Darrell Steward</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-2.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Kristin Watson</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a className="mdtxt">Jane Cooper</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Devon Lane</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-9.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Annette Black</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-10.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a  className="mdtxt">Jerome Bell</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="profile-area d-center justify-content-between">
                      <div className="avatar-item d-flex gap-3 align-items-center">
                          <div className="avatar-item">
                              <img className="avatar-img max-un" src="/src/assets/images/avatar-11.png" alt="avatar"/>
                          </div>
                          <div className="info-area">
                              <h6 className="m-0"><a >Guy Hawkins</a></h6>
                          </div>
                      </div>
                      <div className="btn-group cus-dropdown dropend">
                          <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                          </button>
                          <ul className="dropdown-menu p-4 pt-2">
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                      <span>Unfollow</span>
                                  </a>
                              </li>
                              <li>
                                  <a className="droplist d-flex align-items-center gap-2" href="#">
                                      <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                      <span>Hide Contact</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default FriendsNav
