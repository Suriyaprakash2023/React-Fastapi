import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserProvider'; // Adjust path as necessary

const SideNavProfile = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user, logout } = useUser();

  if (!user) {
    return <div>Loading user data...</div>;
}


  // Construct profile picture source with safe access
  const profilePicSrc = user && user.userPic && user.profile_pic_type
  ? `data:${user.profile_pic_type};base64,${user.userPic}`
  : '/src/assets/images/avatar-1.png';

      
  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
        <div className="d-inline-block">
          <button onClick={toggleVisibility} className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">tune</i>
            <span>My profile</span>
          </button>
        </div>
        <div
          className={`profile-sidebar cus-scrollbar p-5 ${!isVisible ? 'active' : ''}`}
        >
          <div className="d-block d-lg-none position-absolute end-0 top-0">
            <button className="button profile-close">
              <i className="material-symbols-outlined mat-icon fs-xl">close</i>
            </button>
          </div>
          <Link to="/profile">
            <div className="profile-pic d-flex gap-2 align-items-center">
              <div className="avatar position-relative">
                <img
                  className="avatar-img max-un rounded-circle"
                  src={user.userPic}
                  alt={user.userPic ? "User Avatar" : "Default Avatar"}
                  style={{ Width: '50px', maxHeight: '50px' }} // Optional styling
                />
              </div>
              <div className="text-area">
                <h6 className="m-0 mb-1"><a>{user.username}</a></h6>
                <p className="mdtxt">{user.email}</p>
              </div>
            </div>
          </Link>
          <ul className="profile-link mt-7 mb-7 pb-7">
            <li>
              <Link to="/index" className={`d-flex gap-4 ${location.pathname === '/index' ? 'active' : ''}`}>
                <i className="material-symbols-outlined mat-icon">home</i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/friends" className={`d-flex gap-4 ${location.pathname === '/friends' ? 'active' : ''}`}>
                <i className="material-symbols-outlined mat-icon">person</i>
                <span>People</span>
              </Link>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">workspace_premium</i>
                <span>Event</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">perm_media</i>
                <span>Pages</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">workspaces</i>
                <span>Group</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">store</i>
                <span>Marketplace</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">sync_saved_locally</i>
                <span>Saved</span>
              </a>
            </li>
            <li>
              <a className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">bookmark_add</i>
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <Link to="/edit-profile" className="d-flex gap-4">
                <i className="material-symbols-outlined mat-icon">settings</i>
                <span>Settings</span>
              </Link>
            </li>
            <li>
                <a onClick={logout} style={{ cursor: 'pointer' }}  className="d-flex gap-4">
                    <i className="material-symbols-outlined mat-icon"> power_settings_new </i>
                    <span> Sign Out</span>
                </a>
            </li>
          </ul>
          <div className="your-shortcuts">
            <h6>Your shortcuts</h6>
            <ul>
              <li>
                <a className="d-flex align-items-center gap-3">
                  <img src="/src/assets/images/shortcuts-1.png" alt="icon" />
                  <span>Game Community</span>
                </a>
              </li>
              <li>
                <a className="d-flex align-items-center gap-3">
                  <img src="/src/assets/images/shortcuts-2.png" alt="icon" />
                  <span>Pixel Think (Member)</span>
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavProfile;
