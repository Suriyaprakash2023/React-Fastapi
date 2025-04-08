import React,{useEffect} from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../context/data'; // Adjust path as necessary
import { useState } from 'react';
import axios from 'axios';
const UserProfile = () => {
  const { id } = useParams(); // Get the user ID from the URL parameters
  const [user, setUser] = useState(null);

    // Log the user ID to check if it's being captured correctly
  useEffect(() => {
    const fetchUser = async () => {
        try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${BASE_URL}/user-profile/${id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        console.log("User data:", res.data); // Log the user data to check if it's being fetched correctly
        setUser(res.data);
        } catch (error) {
        console.error("Error fetching user profile:", error);
        }
    };
    
    if (id) {
        fetchUser();
      }
    }, [id]);

  if (!user) {
    return <div>Loading user data...</div>;
}

    // Construct the data URL for the profile picture if it exists
    const profilePicSrc = user.userPic && user.profile_pic_type
        ? `data:${user.profile_pic_type};base64,${user.userPic}`
        : '/src/assets/images/avatar-1.png';

        
    

          
  return (
    <>
       {/* <!-- header-section start --> */}
      <Header />
      {/* <!-- header-section end --> */}

     

      {/* <!-- Main Content Start--> */}
      <main className="main-content">
        <div className="container">


            <div className="row">
                <div className="col-lg-12">
                    <div className="banner-area pages-create mb-5">
                        <div className="single-box p-5">
                            <div className="avatar-area">
                                <img className="avatar-img w-100" src="/src/assets/images/profile-cover-img.png" alt="avatar"/>
                            </div>
                            <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between align-items-start">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-item p">
                                        <img className="avatar-img max-un rounded-circle" 
                                        src={profilePicSrc}
                                         alt="avatar"
                                            style={{ Width: '50px', maxHeight: '100px' }} // Optional styling
                                         />
                                    </div>
                                    <div className="text-area text-start">
                                        <h4 className="m-0 mb-2">{user.username}</h4>
                                        <div className="friends-list d-flex flex-wrap gap-2 align-items-center text-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                                <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                            </ul>
                                            <span className="mdtxt d-center">10k Followers</span>
                                            <span className="mdtxt d-center following">200 Following</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-item d-center gap-3">
                                    <Link to="/edit-profile"  className="cmn-btn d-center gap-1">
                                        <i className="material-symbols-outlined mat-icon fs-2"> edit_note </i>
                                        Edit Profile
                                    </Link>
                                    <div className="btn-group cus-dropdown dropend">
                                        <button type="button" className="dropdown-btn d-center px-2" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                    <span>Hide</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="page-details">
                                <ul className="nav mt-5 pt-4 flex-wrap gap-2 tab-area">
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center active">Post</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center">About</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center">Photos</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center">Groups</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center">Connections</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a  className="nav-link d-center">Events</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row sidebar-toggler">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
                    <div className="d-inline-block d-lg-none">
                        <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
                            <i className="material-symbols-outlined mat-icon"> tune </i>
                            <span>My profile</span>
                        </button>
                    </div>
                    <div className="profile-sidebar cus-scrollbar max-width p-5">
                        <div className="d-block d-lg-none position-absolute end-0 top-0">
                            <button className="button profile-close">
                                <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                            </button>
                        </div>
                        <div className="sidebar-area">
                            <div className="mb-3">
                                <h6 className="d-inline-flex">
                                    About
                                </h6>
                            </div>
                            <p className="mdtxt descript">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                            
                        </div>
                        <div className="sidebar-area mt-5">
                            <div className="mb-2">
                                <h6 className="d-inline-flex">
                                    Info
                                </h6>
                            </div>
                            <ul className="d-grid gap-2 mt-4">
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> integration_instructions </i>
                                    <span className="mdtxt">Developer</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> school </i>
                                    <span className="mdtxt">Master's degree</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                    <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0276677176426f636b6e2c616d6f">[email&#160;protected]</a></span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> language </i>
                                    <span className="mdtxt link">www.wisoky.com</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> call </i>
                                    <span className="mdtxt">(+91) {user.mobile_number}</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> pin_drop </i>
                                    <span className="mdtxt">USA</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="material-symbols-outlined mat-icon"> house </i>
                                    <span className="mdtxt">775 Rolling Green Rd.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
                   
                    <div className="post-item d-flex flex-column gap-5 gap-md-7" id="news-feed">
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar position-relative">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                            <span className="mdtxt status">Active</span>
                                        </div>
                                    </div>
                                    <div className="btn-group cus-dropdown">
                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                        </button>
                                        <ul className="dropdown-menu p-4 pt-2">
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                    <span>Saved Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                    <span>Unfollow</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                    <span>Hide Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> lock </i>
                                                    <span>Block</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                    <span>Report Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                </div>
                                <div className="post-img">
                                    <img src="/src/assets/images/post-img-1.png" className="w-100" alt="avatar"/>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                        <li><span className="mdtxt d-center">8+</span></li>
                                    </ul>
                                </div>
                                <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                    <button className="mdtxt">4 Comments</button>
                                    <button className="mdtxt">1 Shares</button>
                                </div>
                            </div>
                            <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> favorite </i>
                                    Like
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> chat </i>
                                    Comment
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> share </i>
                                    Share
                                </button>
                            </div>
                            <form action="#">
                                <div className="d-flex mt-5 gap-3">
                                    <div className="profile-box d-none d-xxl-block">
                                        <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon"/></a>
                                    </div>
                                    <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                        <input placeholder="Write a comment.."/>
                                        <div className="file-input d-flex gap-1 gap-md-2">
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <span className="mood-area">
                                                <span className="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-area d-flex">
                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar position-relative">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                            <span className="mdtxt status">Active</span>
                                        </div>
                                    </div>
                                    <div className="btn-group cus-dropdown">
                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                        </button>
                                        <ul className="dropdown-menu p-4 pt-2">
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                    <span>Saved Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                    <span>Unfollow</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                    <span>Hide Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> lock </i>
                                                    <span>Block</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                    <span>Report Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                </div>
                                <div className="post-img  d-flex justify-content-between flex-wrap gap-2 gap-lg-3">
                                    <div className="single">
                                        <img src="/src/assets/images/post-img-2.png" alt="avatar"/>
                                    </div>
                                    <div className="single d-grid gap-3">
                                        <img src="/src/assets/images/post-img-3.png" alt="avatar"/>
                                        <img src="/src/assets/images/post-img-4.png" alt="avatar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                        <li><span className="mdtxt d-center">8+</span></li>
                                    </ul>
                                </div>
                                <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                    <button className="mdtxt">4 Comments</button>
                                    <button className="mdtxt">1 Shares</button>
                                </div>
                            </div>
                            <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> favorite </i>
                                    Like
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> chat </i>
                                    Comment
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> share </i>
                                    Share
                                </button>
                            </div>
                            <form action="#">
                                <div className="d-flex mt-5 gap-3">
                                    <div className="profile-box d-none d-xxl-block">
                                        <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon"/></a>
                                    </div>
                                    <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                        <input placeholder="Write a comment.."/>
                                        <div className="file-input d-flex gap-1 gap-md-2">
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <span className="mood-area">
                                                <span className="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-area d-flex">
                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="comments-area mt-5">
                                <div className="single-comment-area ms-1 ms-xxl-15">
                                    <div className="parent-comment d-flex gap-2 gap-sm-4">
                                        <div className="avatar-item d-center align-items-baseline">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                        </div>
                                        <div className="info-item">
                                            <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                <div className="title-area">
                                                    <h6 className="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <p className="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                </div>
                                                <div className="btn-group dropend cus-dropdown">
                                                    <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                    </button>
                                                    <ul className="dropdown-menu p-4 pt-2">
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                <span>Hide Comments</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span>Report Comments</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="like-share d-flex gap-6 mt-2">
                                                <li className="d-center">
                                                    <button className="mdtxt">Like</button>
                                                </li>
                                                <li className="d-center flex-column">
                                                    <button className="mdtxt reply-btn">Reply</button>
                                                </li>
                                                <li className="d-center">
                                                    <button className="mdtxt">Share</button>
                                                </li>
                                            </ul>
                                            <form action="#" className="comment-form">
                                                <div className="d-flex gap-3">
                                                    <input placeholder="Write a comment.." className="py-3"/>
                                                    <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                        <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-comment-area comment-item-nested mt-4 mt-sm-7 ms-13 ms-sm-15">
                                        <div className="d-flex gap-2 gap-sm-4 align-items-baseline">
                                            <div className="avatar-item">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                                            </div>
                                            <div className="info-item">
                                                <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                    <div className="title-area">
                                                        <h6 className="m-0 mb-3"><a href="public-profile-post.html">Alex</a></h6>
                                                        <p className="mdtxt">The only way to solve the</p>
                                                    </div>
                                                    <div className="btn-group dropend cus-dropdown">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                        </button>
                                                        <ul className="dropdown-menu p-4 pt-2">
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Comments</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                    <span>Report Comments</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="like-share d-flex gap-6 mt-2">
                                                    <li className="d-center">
                                                        <button className="mdtxt">Like</button>
                                                    </li>
                                                    <li className="d-center flex-column">
                                                        <button className="mdtxt reply-btn">Reply</button>
                                                    </li>
                                                    <li className="d-center">
                                                        <button className="mdtxt">Share</button>
                                                    </li>
                                                </ul>
                                                <form action="#" className="comment-form">
                                                    <div className="d-flex gap-3">
                                                        <input placeholder="Write a comment.." className="py-3"/>
                                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a href="public-profile-post.html">Loprayos</a></h6>
                                            <span className="mdtxt status">20m Ago</span>
                                        </div>
                                    </div>
                                    <div className="btn-group cus-dropdown">
                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                        </button>
                                        <ul className="dropdown-menu p-4 pt-2">
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                    <span>Saved Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                    <span>Unfollow</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                    <span>Hide Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> lock </i>
                                                    <span>Block</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                    <span>Report Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="description">Nam ornare a nibh id sagittis. Vestibulum nec molestie urna, eget convallis mi. Vestibulum rhoncus ligula eget sem sollicitudin interdum. Aliquam massa lectus, fringilla non diam ut, laoreet convallis risus. Curabitur at metus imperdiet, pellentesque ligula vel,</p>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                        <li><span className="mdtxt d-center">8+</span></li>
                                    </ul>
                                </div>
                                <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                    <button className="mdtxt">4 Comments</button>
                                    <button className="mdtxt">1 Shares</button>
                                </div>
                            </div>
                            <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> favorite </i>
                                    Like
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> chat </i>
                                    Comment
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> share </i>
                                    Share
                                </button>
                            </div>
                            <form action="#">
                                <div className="d-flex mt-5 gap-3">
                                    <div className="profile-box d-none d-xxl-block">
                                        <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon"/></a>
                                    </div>
                                    <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                        <input placeholder="Write a comment.."/>
                                        <div className="file-input d-flex gap-1 gap-md-2">
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <span className="mood-area">
                                                <span className="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-area d-flex">
                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="comments-area mt-5">
                                <div className="single-comment-area ms-1 ms-xxl-15">
                                    <div className="parent-comment d-flex gap-2 gap-sm-4">
                                        <div className="avatar-item d-center align-items-baseline">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                        </div>
                                        <div className="info-item active">
                                            <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                <div className="title-area">
                                                    <h6 className="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <p className="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                </div>
                                                <div className="btn-group dropend cus-dropdown">
                                                    <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                    </button>
                                                    <ul className="dropdown-menu p-4 pt-2">
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                <span>Hide Comments</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span>Report Comments</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="like-share d-flex gap-6 mt-2">
                                                <li className="d-center">
                                                    <button className="mdtxt">Like</button>
                                                </li>
                                                <li className="d-center flex-column">
                                                    <button className="mdtxt reply-btn">Reply</button>
                                                </li>
                                                <li className="d-center">
                                                    <button className="mdtxt">Share</button>
                                                </li>
                                            </ul>
                                            <form action="#" className="comment-form">
                                                <div className="d-flex gap-3">
                                                    <input placeholder="Write a comment.." className="py-3"/>
                                                    <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                        <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sibling-comment comment-item-nested single-comment-area mt-7 ms-13 ms-sm-15">
                                        <div className="d-flex gap-2 gap-sm-4 align-items-baseline">
                                            <div className="avatar-item">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                                            </div>
                                            <div className="info-item">
                                                <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                    <div className="title-area">
                                                        <h6 className="m-0 mb-3"><a href="public-profile-post.html">Alexa</a></h6>
                                                        <p className="mdtxt">The only way to solve the</p>
                                                    </div>
                                                    <div className="btn-group dropend cus-dropdown">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                        </button>
                                                        <ul className="dropdown-menu p-4 pt-2">
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Comments</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                    <span>Report Comments</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="like-share d-flex gap-6 mt-2">
                                                    <li className="d-center">
                                                        <button className="mdtxt">Like</button>
                                                    </li>
                                                    <li className="d-center flex-column">
                                                        <button className="mdtxt reply-btn">Reply</button>
                                                    </li>
                                                    <li className="d-center">
                                                        <button className="mdtxt">Share</button>
                                                    </li>
                                                </ul>
                                                <form action="#" className="comment-form">
                                                    <div className="d-flex gap-3">
                                                        <input placeholder="Write a comment.." className="py-3"/>
                                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-comment-area comment-item-nested mt-7 ms-13 ms-sm-15">
                                        <div className="d-flex gap-2 gap-sm-4 align-items-baseline">
                                            <div className="avatar-item">
                                                <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar"/>
                                            </div>
                                            <div className="info-item">
                                                <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                    <div className="title-area">
                                                        <h6 className="m-0 mb-3"><a href="public-profile-post.html">Haplika</a></h6>
                                                        <p className="mdtxt">The only way to solve the</p>
                                                    </div>
                                                    <div className="btn-group dropend cus-dropdown">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                        </button>
                                                        <ul className="dropdown-menu p-4 pt-2">
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Comments</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                    <span>Report Comments</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="like-share d-flex gap-6 mt-2">
                                                    <li className="d-center">
                                                        <button className="mdtxt">Like</button>
                                                    </li>
                                                    <li className="d-center flex-column">
                                                        <button className="mdtxt reply-btn">Reply</button>
                                                    </li>
                                                    <li className="d-center">
                                                        <button className="mdtxt">Share</button>
                                                    </li>
                                                </ul>
                                                <form action="#" className="comment-form">
                                                    <div className="d-flex gap-3">
                                                        <input placeholder="Write a comment.." className="py-3"/>
                                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area mt-5">
                                <div className="single-comment-area ms-1 ms-xxl-15">
                                    <div className="d-flex gap-4">
                                        <div className="avatar-item d-center align-items-baseline">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                        </div>
                                        <div className="info-item w-100">
                                            <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                <div className="title-area">
                                                    <h6 className="m-0 mb-3"><a href="public-profile-post.html">Marlio</a></h6>
                                                    <div className="post-img">
                                                        <img src="/src/assets/images/icon/emoji-love-2.png" alt="icon"/>
                                                    </div>
                                                </div>
                                                <div className="btn-group dropend cus-dropdown">
                                                    <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                    </button>
                                                    <ul className="dropdown-menu p-4 pt-2">
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                <span>Hide Comments</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="droplist d-flex align-items-center gap-2" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span>Report Comments</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul className="like-share d-flex gap-6 mt-2">
                                                <li className="d-center">
                                                    <button className="mdtxt">Like</button>
                                                </li>
                                                <li className="d-center flex-column">
                                                    <button className="mdtxt reply-btn">Reply</button>
                                                </li>
                                                <li className="d-center">
                                                    <button className="mdtxt">Share</button>
                                                </li>
                                            </ul>
                                            <form action="#" className="comment-form">
                                                <div className="d-flex gap-3">
                                                    <input placeholder="Write a comment.." className="py-3"/>
                                                    <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                                        <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar position-relative">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                            <span className="mdtxt status">Active</span>
                                        </div>
                                    </div>
                                    <div className="btn-group cus-dropdown">
                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                        </button>
                                        <ul className="dropdown-menu p-4 pt-2">
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                    <span>Saved Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                    <span>Unfollow</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                    <span>Hide Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> lock </i>
                                                    <span>Block</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                    <span>Report Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="description">My Travel Video</p>
                                    <p className="hastag d-flex gap-2">
                                        <a href="#">#Viral</a>
                                        <a href="#">#travel</a>
                                    </p>
                                </div>
                                <div className="post-img video-item">
                                    <div className="plyr__video-embed player">
                                    </div>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                        <li><span className="mdtxt d-center">8+</span></li>
                                    </ul>
                                </div>
                                <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                    <button className="mdtxt">4 Comments</button>
                                    <button className="mdtxt">1 Shares</button>
                                </div>
                            </div>
                            <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> favorite </i>
                                    Like
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> chat </i>
                                    Comment
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> share </i>
                                    Share
                                </button>
                            </div>
                            <form action="#">
                                <div className="d-flex mt-5 gap-3">
                                    <div className="profile-box d-none d-xxl-block">
                                        <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon"/></a>
                                    </div>
                                    <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                        <input placeholder="Write a comment.."/>
                                        <div className="file-input d-flex gap-1 gap-md-2">
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <span className="mood-area">
                                                <span className="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-area d-flex">
                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar position-relative">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                            <span className="mdtxt status">Active</span>
                                        </div>
                                    </div>
                                    <div className="btn-group cus-dropdown">
                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                        </button>
                                        <ul className="dropdown-menu p-4 pt-2">
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                    <span>Saved Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                    <span>Unfollow</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                    <span>Hide Post</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> lock </i>
                                                    <span>Block</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="droplist d-flex align-items-center gap-2" href="#">
                                                    <i className="material-symbols-outlined mat-icon"> flag </i>
                                                    <span>Report Post</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                </div>
                                <div className="post-img">
                                    <img src="/src/assets/images/post-img-1.png" className="w-100" alt="avatar"/>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="avatar"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="avatar"/></li>
                                        <li><span className="mdtxt d-center">8+</span></li>
                                    </ul>
                                </div>
                                <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                    <button className="mdtxt">4 Comments</button>
                                    <button className="mdtxt">1 Shares</button>
                                </div>
                            </div>
                            <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> favorite </i>
                                    Like
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> chat </i>
                                    Comment
                                </button>
                                <button className="d-center gap-1 gap-sm-2 mdtxt">
                                    <i className="material-symbols-outlined mat-icon"> share </i>
                                    Share
                                </button>
                            </div>
                            <form action="#">
                                <div className="d-flex mt-5 gap-3">
                                    <div className="profile-box d-none d-xxl-block">
                                        <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon"/></a>
                                    </div>
                                    <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                        <input placeholder="Write a comment.."/>
                                        <div className="file-input d-flex gap-1 gap-md-2">
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="file-upload">
                                                <label className="file">
                                                    <input type="file"/>
                                                    <span className="file-custom border-0 d-grid text-center">
                                                        <span className="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <span className="mood-area">
                                                <span className="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-area d-flex">
                                        <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                                            <i className="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
                    <div className="cus-overflow cus-scrollbar sidebar-head">
                        <div className="d-flex justify-content-end">
                            <div className="d-block d-xl-none me-4">
                                <button className="button toggler-btn mb-4 mb-lg-0 d-flex align-items-center gap-2">
                                    <span>My List</span>
                                    <i className="material-symbols-outlined mat-icon"> tune </i>
                                </button>
                            </div>
                        </div>
                        <div className="cus-scrollbar side-wrapper">
                            <div className="sidebar-wrapper d-flex flex-column gap-6 max-width">
                               
                                <div className="sidebar-area p-5">
                                    <div className="mb-4">
                                        <h6 className="d-inline-flex">
                                            Contact
                                        </h6>
                                    </div>
                                    <div className="d-flex flex-column gap-6">
                                        <div className="profile-area d-center position-relative align-items-center justify-content-between">
                                            <div className="avatar-item d-flex gap-3 align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Piter Maio</a></h6>
                                                </div>
                                            </div>
                                            <span className="mdtxt abs-area d-center position-absolute end-0">5</span>
                                        </div>
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="avatar-item d-flex gap-3 align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar"/>
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Floyd Miles</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Darrell Steward</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Kristin Watson</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Jane Cooper</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Devon Lane</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Annette Black</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Jerome Bell</a></h6>
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
                                                    <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Guy Hawkins</a></h6>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      {/* <!-- Main Content End--> */}
    </>
  )
}

export default UserProfile
