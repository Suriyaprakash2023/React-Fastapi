import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
const EditProfile = () => {
  return (
    <>
      {/* Header Start */}
        <Header />
      {/* Header End */}
      
      {/* Content Start */}
      <main className="main-content">
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4">
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
                                <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1"><a >Lerio Mao</a></h6>
                                <p className="mdtxt">@maolio</p>
                            </div>
                        </div>
                        <ul className="profile-link mt-7 mb-7 pb-7">
                            <li>
                                <Link to="/index"  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> home </i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> person </i>
                                    <span>People</span>
                                </a>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> workspace_premium </i>
                                    <span>Event</span>
                                </a>
                            </li>
                            <li>
                                <a className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> perm_media </i>
                                    <span>Pages</span>
                                </a>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> workspaces </i>
                                    <span>Group</span>
                                </a>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> store </i>
                                    <span>Marketplace</span>
                                </a>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> sync_saved_locally </i>
                                    <span>Saved</span>
                                </a>
                            </li>
                            <li>
                                <a  className="d-flex gap-4">
                                    <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                    <span>Favorites</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/edit-profile"  className="d-flex gap-4 active">
                                    <i className="material-symbols-outlined mat-icon"> settings </i>
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8 cus-mar setting-row">
                    <div className="head-area mb-6 text-start">
                        <h5>Settings</h5>
                    </div>
                    <div className="single-box p-sm-5 p-3">
                        <div className="row gap-6">
                            <div className="col-xxl-2 col-md-3 col-sm-5 col-6 pe-0">
                                <div className="upload-single">
                                    <div className="head-area mb-2 text-start">
                                        <h6>Profile Image</h6>
                                    </div>
                                    <div className="profile-picture text-start">
                                        <img className="preview-image w-100" src="/src/assets/images/profile-picture.png" alt="Preview Image"/>
                                    </div>
                                    <div className="file-upload">
                                        <label className="file text-start mt-2">
                                            <input type="file"/>
                                            <span className="cmn-btn">Change Profile</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="upload-single cover-img">
                                    <div className="head-area mb-2 text-start">
                                        <h6>Cover Image</h6>
                                    </div>
                                    <div className="profile-picture text-start">
                                        <img className="preview-image w-100" src="/src/assets/images/profile-cover.png" alt="Preview Image"/>
                                    </div>
                                    <div className="file-upload">
                                        <label className="file text-start mt-2">
                                            <input type="file"/>
                                            <span className="cmn-btn">Change Cover photo</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-box text-start p-sm-5 p-3">
                        <div className="head-area mb-6">
                            <h6>General Information </h6>
                        </div>
                        <form action="#" className="text-center d-grid gap-4">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-input text-start">
                                        <label htmlFor="name">Name</label>
                                        <div className="input-area second">
                                            <input type="text" value="Java World Group" placeholder="Type name" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-input text-start">
                                        <label htmlFor="number">Number</label>
                                        <div className="input-area second">
                                            <input type="text" value="(316) 555-0116" placeholder="Number" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-input text-start">
                                        <label htmlhtmlFor="Email">Email</label>
                                        <div className="input-area second">
                                            <input type="text" value="test@mail.com" placeholder="Email" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7 col-9 mt-4">
                                    <div className="single-input text-start">
                                        <h6>Bio</h6>
                                        <p className="mdtxt mt-6">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-3 mt-4 d-center justify-content-end">
                                    <div className="single-input d-center text-start">
                                        <div className="group-btn cus-dropdown dropend">
                                            <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="material-symbols-outlined fs-3 m-0"> public </i>
                                            </button>
                                            <ul className="dropdown-menu p-4 pt-2">
                                                <li>
                                                    <a className="droplist d-flex align-items-center gap-2" href="#">
                                                        <i className="material-symbols-outlined mat-icon"> public </i>
                                                        <span>Public</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="droplist d-flex align-items-center gap-2" href="#">
                                                        <i className="material-symbols-outlined mat-icon"> person </i>
                                                        <span>Only me</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="droplist d-flex align-items-center gap-2" href="#">
                                                        <i className="material-symbols-outlined mat-icon"> share </i>
                                                        <span>Share</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="group-btn cus-dropdown dropend">
                                            <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                            </button>
                                            <ul className="dropdown-menu p-4 pt-2">
                                                <li>
                                                    <a className="droplist d-flex align-items-center gap-2" href="#">
                                                        <i className="material-symbols-outlined mat-icon"> edit </i>
                                                        <span>Edit</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="droplist d-flex align-items-center gap-2" href="#">
                                                        <i className="material-symbols-outlined mat-icon"> delete </i>
                                                        <span>Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mt-4">
                                    <div className="btn-area text-end">
                                        <button className="cmn-btn">Saved Change</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
      {/* Content End */}
    </>
  )
}

export default EditProfile
