import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useUser } from '../context/UserProvider'; // Adjust path as necessary
import axios from 'axios';
import { BASE_URL } from '../context/data';

const EditProfile = () => {
    const { user, logout, refreshUser } = useUser(); // Added refreshUser
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [edituser, setUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        mobile_number: '',
        dateOfBirth: '',
        email: '',
        profilePic: null,
        coverPic: null,
    });
    const [previewProfilePic, setPreviewProfilePic] = useState(null);
    const [previewCoverPic, setPreviewCoverPic] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Profile picture source using user from context
    const profilePicSrc = user?.userPic && user?.profile_pic_type
        ? `data:${user.profile_pic_type};base64,${user.userPic}`
        : '/src/assets/images/avatar-1.png';

    // Fetch current user data and sync with context
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setUser(null);
                return;
            }

            try {
                const response = await axios.get(`${BASE_URL}/users/me`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const userData = response.data;
                if (userData.userPic && userData.profile_pic_type) {
                    userData.userPic = `data:${userData.profile_pic_type};base64,${userData.userPic}`;
                }
                if (userData.coverPic) {
                    userData.coverPic = `data:image/jpeg;base64,${userData.coverPic}`;
                }
                setUser(userData);
                setFormData({
                    username: userData.username || '',
                    mobile_number: userData.mobile_number || '',
                    dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth.split('T')[0] : '',
                    email: userData.email || '',
                    profilePic: null,
                    coverPic: null,
                });
                setPreviewProfilePic(userData.userPic);
                setPreviewCoverPic(userData.coverPic || '/src/assets/images/profile-cover.png');
                setUsername(userData.username || '');
                setEmail(userData.email || '');
                setMobileNumber(userData.mobile_number || '');
                setDateOfBirth(userData.dateOfBirth ? userData.dateOfBirth.split('T')[0] : '');
            } catch (error) {
                console.error('Error fetching user:', error.response?.data || error);
                setUser(null);
            }
        };

        fetchUserData();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'mobile_number') setMobileNumber(value);
        if (name === 'dateOfBirth') setDateOfBirth(value);
    };

    // Handle file change and preview for profile picture
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, profilePic: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle file change and preview for cover picture
    const handleCoverPicFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, coverPic: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewCoverPic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setErrorMessage('Not authenticated');
            return;
        }

        const updateData = new FormData();
        if (formData.username) updateData.append('username', formData.username);
        if (formData.mobile_number) updateData.append('mobile_number', formData.mobile_number);
        if (formData.dateOfBirth) updateData.append('dateOfBirth', formData.dateOfBirth);
        if (formData.email) updateData.append('email', formData.email);
        if (formData.profilePic) updateData.append('profilePic', formData.profilePic);
        if (formData.coverPic) updateData.append('coverPic', formData.coverPic);

        try {
            const response = await axios.patch(`${BASE_URL}/edit-profile`, updateData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            const updatedUser = response.data;
            if (updatedUser.userPic && updatedUser.profile_pic_type) {
                updatedUser.userPic = `data:${updatedUser.profile_pic_type};base64,${updatedUser.userPic}`;
            }
            if (updatedUser.coverPic) {
                updatedUser.coverPic = `data:image/jpeg;base64,${updatedUser.coverPic}`;
            }
            setUser(updatedUser);
            setPreviewProfilePic(updatedUser.userPic || previewProfilePic);
            setPreviewCoverPic(updatedUser.coverPic || previewCoverPic);
            setSuccessMessage('Profile updated successfully!');
            setErrorMessage(null);
            // Update global user state
            refreshUser(token);

            setTimeout(() => {
                setSuccessMessage(null);
              }, 5000);
              
        } catch (error) {
            console.error('Error updating profile:', error.response?.data || error);
            setErrorMessage(error.response?.data?.detail || 'Failed to update profile');
            setSuccessMessage(null);

            setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
        }
    };

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
                                        <img
                                            className="avatar-img max-un rounded-circle"
                                            src={previewProfilePic || profilePicSrc}
                                            style={{ width: '50px', maxHeight: '50px' }}
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className="text-area">
                                        <h6 className="m-0 mb-1"><a>{username}</a></h6>
                                        <p className="mdtxt">{email}</p>
                                    </div>
                                </div>
                                <ul className="profile-link mt-7 mb-7 pb-7">
                                    <li>
                                        <Link to="/index" className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> home </i>
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                            <span>People</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex gap-4">
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
                                        <a className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> workspaces </i>
                                            <span>Group</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> store </i>
                                            <span>Marketplace</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> sync_saved_locally </i>
                                            <span>Saved</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                            <span>Favorites</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/edit-profile" className="d-flex gap-4 active">
                                            <i className="material-symbols-outlined mat-icon"> settings </i>
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={logout} style={{ cursor: 'pointer' }} className="d-flex gap-4">
                                            <i className="material-symbols-outlined mat-icon"> power_settings_new </i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 cus-mar setting-row">
                            <form onSubmit={handleSubmit} className="profile-form">
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
                                                    <img
                                                        className="preview-image w-100 rounded-circle"
                                                        src={previewProfilePic || profilePicSrc}
                                                        style={{ width: '200px', maxHeight: '100px' }}
                                                        alt="Preview Image"
                                                    />
                                                </div>
                                                <div className="file-upload">
                                                    <label className="file text-start mt-2">
                                                        <input
                                                            type="file"
                                                            name="profilePic"
                                                            accept="image/*"
                                                            onChange={handleFileChange}
                                                        />
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
                                                    <img
                                                        className="preview-image w-100"
                                                        src={previewCoverPic || '/src/assets/images/profile-cover.png'}
                                                        alt="Preview Image"
                                                    />
                                                </div>
                                                <div className="file-upload">
                                                    <label className="file text-start mt-2">
                                                        <input
                                                            type="file"
                                                            name="coverPic"
                                                            accept="image/*"
                                                            onChange={handleCoverPicFileChange}
                                                        />
                                                        <span className="cmn-btn">Change Cover photo</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-box text-start p-sm-5 p-3">
                                

                                    {successMessage && (
                                    <div className="alert alert-success text-white mb-3" style={{ backgroundColor: '#28b528' }}>
                                        {successMessage}
                                    </div>
                                    )}

                                    {errorMessage && (
                                    <div className="alert alert-danger text-white mb-3" style={{ backgroundColor: '#ff4d4d' }}>
                                        {errorMessage}
                                    </div>
                                    )}
                                    <div className="head-area mb-6">
                                        <h6>General Information</h6>
                                    </div>
                                    
                                    <div className="text-center d-grid gap-4">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input text-start">
                                                    <label htmlFor="name">UserName</label>
                                                    <div className="input-area second">
                                                        <input
                                                            type="text"
                                                            placeholder="Type name"
                                                            autoComplete="off"
                                                            name="username"
                                                            value={formData.username}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input text-start">
                                                    <label htmlFor="number">Number</label>
                                                    <div className="input-area second">
                                                        <input
                                                            type="tel"
                                                            name="mobile_number"
                                                            value={formData.mobile_number}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input text-start">
                                                    <label htmlFor="Email">Email</label>
                                                    <div className="input-area second">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email"
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input text-start">
                                                    <label htmlFor="DoB">Date of Birth</label>
                                                    <div className="input-area second">
                                                        <input
                                                            type="date"
                                                            id="dateOfBirth"
                                                            name="dateOfBirth"
                                                            value={formData.dateOfBirth}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                        />
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
                                                    <button type="submit" className="cmn-btn">Save Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            {/* Content End */}
        </>
    );
};

export default EditProfile;