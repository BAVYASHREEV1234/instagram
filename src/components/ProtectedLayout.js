// ProtectedLayout.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const ProtectedLayout = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="app">
            <Sidebar /> {/* Sidebar only shows if logged in */}
            <div className="main-content">
                <Outlet /> {/* Renders the nested routes */}
            </div>
        </div>
    );
};

export default ProtectedLayout;
