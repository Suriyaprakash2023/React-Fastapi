// api.js
import { BASE_URL } from './data'; // Adjust path as necessary
import axios from 'axios';

// Example function to get user data from the API
export const getUserData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
