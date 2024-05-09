import React, { useState } from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
const AdminInfoBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userName, setUserName] = useState("Eleonor Djounkeng"); // Initial state is true assuming the user is logged in
     // Initial state is true assuming the user is logged in

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="navbar navbar-brand  navbar-light bg-light">
            <div className='container my-2 mx-1 '>
            {isLoggedIn ? (
                <>
                    
                    <span className="ml-3 navbar-brand ml-3">
                        <FaUser/>{userName}
                    </span>
                    <span className = "mr-3"   onClick={handleLogout}>
                        <FaSignOutAlt />Logout
                    </span>
                </>
            ) : (
                <span>User logged out</span>
            )}

            </div>
            
        </div>
    );
};

export default AdminInfoBar;
