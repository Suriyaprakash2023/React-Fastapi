import React from 'react';
import { useUser } from '../context/UserProvider';

function Dashboard() {
    const { user, logout } = useUser();

    if (!user) return <div>Please log in</div>;

    return (
        <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;
