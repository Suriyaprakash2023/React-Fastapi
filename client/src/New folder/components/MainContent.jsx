import React,{useEffect,useState} from 'react'
import SideNavProfile from './SideNavProfile'
import SideNavContact from './SideNavContact'
import { getUserData } from '../context/getUserData'; // Adjust path as necessary
import { useUser } from '../context/UserProvider'; // Adjust path as necessary
const MainContent = () => {

    const [user, setUser] = useState(null);
   
    // Construct profile picture source with safe access
    const profilePicSrc = user && user.userPic && user.profile_pic_type
    ? `data:${user.profile_pic_type};base64,${user.userPic}`
    : '/src/assets/images/avatar-1.png';
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData();
                console.log('User data:', data);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
  return (
    <>
      <main className="main-content sidebar-content">
        <div className="container-fluid">
            <div className="row justify-content-between">
               
               {/* SideNav Profile Start */}
                  <SideNavProfile />
               {/* SideNav Profile End */}


                <div className="col-xxl-5 col-xl-6 col-lg-8 d-flex flex-column gap-7 mt-0 mt-lg-12 mt-xl-0">
                    
                    <div className="share-post d-flex gap-3 gap-sm-5 p-3 p-sm-5">
                        <div className="profile-box">
                            <a >
                                <img 
                                className="max-un rounded-circle w-100"
                                alt="icon"
                                src={profilePicSrc}
                                style={{ Width:'60px !important', maxHeight: '50px' }}
                              />
                            </a>
                        </div>
                        <form action="#" className="w-100 position-relative">
                            <textarea cols="10" rows="2" placeholder="Write something to Lerio.."></textarea>
                            <div className="abs-area position-absolute d-none d-sm-block">
                                <i className="material-symbols-outlined mat-icon xxltxt"> sentiment_satisfied </i>
                            </div>
                            <ul className="d-flex justify-content-between flex-wrap mt-3 gap-3">
                                <li className="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#goLiveMod">
                                    <img src="/src/assets/images/icon/live-video.png" className="max-un" alt="icon"/>
                                    <span>Live</span>
                                </li>
                                <li className="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#photoVideoMod">
                                    <img src="/src/assets/images/icon/vgallery.png" className="max-un" alt="icon"/>
                                    <span>Photo/Video</span>
                                </li>
                                <li className="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#activityMod">
                                    <img src="/src/assets/images/icon/emoji-laughing.png" className="max-un" alt="icon"/>
                                    <span>Fallings/Activity</span>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="post-item d-flex flex-column gap-5 gap-md-7">
                        <div className="post-single-box p-3 p-sm-5">
                            <div className="top-area pb-5">
                                <div className="profile-area d-center justify-content-between">
                                    <div className="avatar-item d-flex gap-3 align-items-center">
                                        <div className="avatar position-relative">
                                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                        </div>
                                        <div className="info-area">
                                            <h6 className="m-0"><a >Lori Cortez</a></h6>
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
                                    <img src="/src/assets/images/post-img-1.png" className="w-100" alt="image"/>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
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
                                            <h6 className="m-0"><a >Lori Cortez</a></h6>
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
                                <div className="post-img d-flex justify-content-between flex-wrap gap-2 gap-lg-3">
                                    <div className="single">
                                        <img src="/src/assets/images/post-img-2.png" alt="image"/>
                                    </div>
                                    <div className="single d-grid gap-3">
                                        <img src="/src/assets/images/post-img-3.png" alt="image"/>
                                        <img src="/src/assets/images/post-img-4.png" alt="image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
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
                                                    <h6 className="m-0 mb-3"><a >Lori Cortez</a></h6>
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
                                                        <h6 className="m-0 mb-3"><a >Alex</a></h6>
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
                                            <h6 className="m-0"><a >Loprayos</a></h6>
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
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
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
                                                    <h6 className="m-0 mb-3"><a >Lori Cortez</a></h6>
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
                                                        <h6 className="m-0 mb-3"><a >Alexa</a></h6>
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
                                                        <h6 className="m-0 mb-3"><a >Haplika</a></h6>
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
                                                    <h6 className="m-0 mb-3"><a >Marlio</a></h6>
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
                                            <h6 className="m-0"><a >Lori Cortez</a></h6>
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
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
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
                                      <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
                                  </div>
                                  <div className="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                      <input placeholder="Write a comment.." />
                                      <div className="file-input d-flex gap-1 gap-md-2">
                                          <div className="file-upload">
                                              <label className="file">
                                                  <input type="file" />
                                                  <span className="file-custom border-0 d-grid text-center">
                                                      <span className="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                  </span>
                                              </label>
                                          </div>
                                          <div className="file-upload">
                                              <label className="file">
                                                  <input type="file" />
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
                                            <h6 className="m-0"><a >Lori Cortez</a></h6>
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
                                    <img src="/src/assets/images/post-img-1.png" className="w-100" alt="image"/>
                                </div>
                            </div>
                            <div className="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                <div className="friends-list d-flex gap-3 align-items-center text-center">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                        <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
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

                {/* SideNav Contact Start */}
                  <SideNavContact/>
                {/* SideNav Contact End */}
               
            </div>
        </div>
      </main>
    </>
  )
}

export default MainContent
