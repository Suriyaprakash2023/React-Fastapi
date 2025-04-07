import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './data';
import { useNavigate } from 'react-router-dom';

// Create a context for the user state
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Fetch user data on mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            refreshUser(token);
        }
    }, []);

    // Function to refresh user data
    const refreshUser = async (token) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token || localStorage.getItem("token")}`,
                },
            });
            const userData = response.data;
            if (userData.userPic && userData.profile_pic_type) {
                userData.userPic = `data:${userData.profile_pic_type};base64,${userData.userPic}`;
            }
            if (userData.coverPic) {
                userData.coverPic = `data:image/jpeg;base64,${userData.coverPic}`; // Adjust MIME type if needed
            }
            setUser(userData);
        } catch (error) {
            console.error('Error refreshing user:', error);
            localStorage.removeItem("token");
            setUser(null);
        }
    };

    const login = (token) => {
        localStorage.setItem("token", token);
        refreshUser(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate('/');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, refreshUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);