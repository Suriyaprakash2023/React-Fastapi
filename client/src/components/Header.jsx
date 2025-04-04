import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserProvider'; // Adjust path as necessary

const Header = () => {

  const { user, logout } = useUser();
  
  return (
    <>
       <header className="header-section header-menu">
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid">
                <nav className="navbar w-100 navbar-expand-lg justify-content-betweenm">
                    <a  className="navbar-brand">
                        <img src="/src/assets/logo-icon.png" style={{height:"50px"}} className="logo" alt="logo"/>
                    </a>
                    <button className="button search-active d-block d-md-none">
                        <i className="d-center material-symbols-outlined fs-xxl mat-icon"> search </i>
                    </button>
                    <div className="search-form">
                        <form action="#" className="input-area d-flex align-items-center">
                            <i className="material-symbols-outlined mat-icon">search</i>
                            <input type="text" placeholder="Search Circlehubtio" autoComplete="off"/>
                        </form>
                    </div>
                    <ul className="navbar-nav feed flex-row gap-xl-20 gap-lg-10 gap-sm-7 gap-1 py-4 py-lg-0 m-lg-auto ms-auto ms-aut align-self-center">
                        <li>
                            <Link to="/index"  className="nav-icon home active"><i className="mat-icon fs-xxl material-symbols-outlined mat-icon">home</i></Link>
                        </li>
                        <li>
                            <a href="#news-feed" className="nav-icon feed"><i className="mat-icon fs-xxl material-symbols-outlined mat-icon">feed</i></a>
                        </li>
                        <li>
                            <a  className="nav-icon"><i className="mat-icon fs-xxl material-symbols-outlined mat-icon">group</i></a>
                        </li>
                        <li>
                            <a  className="nav-icon"><i className="mat-icon fs-xxl material-symbols-outlined mat-icon">smart_display</i></a>
                        </li>
                    </ul>
                    <div className="right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center">
                        <div className="single-item d-none d-lg-block messages-area">
                            <div className="messages-btn cmn-head">
                                <div className="icon-area d-center position-relative">
                                    <i className="material-symbols-outlined mat-icon">mail</i>
                                    <span className="abs-area position-absolute d-center mdtxt">4</span>
                                </div>
                            </div>
                            <div className="main-area p-5 messages-content">
                                <h5 className="mb-8">Messages</h5>
                                <div className="single-box p-0 mb-7">
                                    <a href="profile-chat.html" className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <div className="title-area position-relative d-inline-flex align-items-center">
                                                <h6 className="m-0 d-inline-flex">Piter Maio</h6>
                                                <span className="abs-area position-absolute d-center mdtxt">3</span>
                                            </div>
                                            <p className="mdtxt sms">Amet minim mollit non....</p>
                                        </div>
                                    </a>
                                </div>
                                <div  className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Annette Black</h6>
                                            <p className="mdtxt">You: consequat sunt</p>
                                        </div>
                                    </a>
                                </div>
                                <div  className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-2.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Ralph Edwards</h6>
                                            <p className="mdtxt sms">Amet minim mollit non....</p>
                                        </div>
                                    </a>
                                </div>
                                <div  className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Darrell Steward</h6>
                                            <p className="mdtxt">You: consequat sunt</p>
                                        </div>
                                    </a>
                                </div>
                                <div  className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Wade Warren</h6>
                                            <p className="mdtxt">You: consequat sunt</p>
                                        </div>
                                    </a>
                                </div>
                                <div  className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                            <p className="mdtxt">You: consequat sunt</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-box p-0 mb-7">
                                    <a  className="d-flex gap-2 align-items-center">
                                        <div className="avatar">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-6.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Jacob Jones</h6>
                                            <p className="mdtxt">You: consequat sunt</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="btn-area">
                                    <a >See all inbox</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-item d-none d-lg-block messages-area notification-area">
                            <div className="notification-btn cmn-head position-relative">
                                <div className="icon-area d-center position-relative">
                                    <i className="material-symbols-outlined mat-icon">notifications</i>
                                    <span className="abs-area position-absolute d-center mdtxt">3</span>
                                </div>
                            </div>
                            <div className="main-area p-5 notification-content">
                                <h5 className="mb-8">Notification</h5>
                                <div className="single-box p-0 mb-7">
                                    <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                                        <div className="left-item position-relative d-inline-flex gap-3">
                                            <div className="avatar position-relative d-inline-flex">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                                <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/speech-bubble.png" alt="icon"/>
                                            </div>
                                            <div className="text-area">
                                                <h6 className="m-0 mb-1">Piter Maio</h6>
                                                <p className="mdtxt">Comment on your post</p>
                                            </div>
                                        </div>
                                        <div className="time-remaining">
                                            <p className="mdtxt">Just now</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-box p-0 mb-7">
                                    <a  className="d-flex justify-content-between align-items-center">
                                        <div className="left-item position-relative d-inline-flex gap-3">
                                            <div className="avatar position-relative d-inline-flex">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-2.png" alt="avatar"/>
                                                <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon"/>
                                            </div>
                                            <div className="text-area">
                                                <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                                <p className="mdtxt">Like your photo</p>
                                            </div>
                                        </div>
                                        <div className="time-remaining">
                                            <p className="mdtxt">2min</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-box p-0 mb-7">
                                    <a  className="d-flex justify-content-between align-items-center">
                                        <div className="left-item position-relative d-inline-flex gap-3">
                                            <div className="avatar position-relative d-inline-flex">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                                <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon"/>
                                            </div>
                                            <div className="text-area">
                                                <h6 className="m-0 mb-1">Jacob Jones</h6>
                                                <p className="mdtxt">Sent you a request</p>
                                            </div>
                                        </div>
                                        <div className="time-remaining">
                                            <p className="mdtxt">1hr</p>
                                        </div>
                                    </a>
                                    <div className="d-flex gap-3 mt-4">
                                        <button className="cmn-btn">Accept</button>
                                        <button className="cmn-btn alt">Delete</button>
                                    </div>
                                </div>                             
                                <div className="single-box p-0 mb-7">
                                    <a  className="d-flex justify-content-between align-items-center">
                                        <div className="left-item position-relative d-inline-flex gap-3">
                                            <div className="avatar position-relative d-inline-flex">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                                                <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon"/>
                                            </div>
                                            <div className="text-area">
                                                <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                                <p className="mdtxt">officia consequat duis enim...</p>
                                            </div>
                                        </div>
                                        <div className="time-remaining">
                                            <p className="mdtxt">2hr</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="btn-area">
                                    <a >See all notification</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-item d-none d-lg-block profile-area position-relative">
                            <div className="profile-pic d-flex align-items-center">
                                <span className="avatar cmn-head active-status">
                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                </span>
                            </div>
                            <div className="main-area p-5 profile-content">
                                <div className="head-area">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="text-area">
                                            <h6 className="m-0 mb-1">Lori Ferguson</h6>
                                            <p className="mdtxt">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-profile my-2">
                                    <a  className="mdtxt w-100 text-center py-2">View profile</a>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/edit-profile"  className="mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> settings </i>
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <a  className="mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> power_settings_new </i>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                                <div className="switch-wrapper mt-4 d-flex gap-1 align-items-center">
                                    <i className="mat-icon material-symbols-outlined sun icon"> light_mode </i>
                                    <label className="switch">
                                        <input type="checkbox" className="checkbox"/>
                                        <span className="slider"></span>
                                    </label>
                                    <i className="mat-icon material-symbols-outlined moon icon"> dark_mode </i>
                                    <span className="mdtxt ms-2">Dark mode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
