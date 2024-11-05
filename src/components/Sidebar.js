import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">Instagram</h2>
            <ul className="nav-list">
                <li><Link to="/home" className="nav-link">🏠 Home</Link></li>
                <li><Link to="/search" className="nav-link">🔍 Search</Link></li>
                <li><Link to="/explore" className="nav-link">🌍 Explore</Link></li>
                <li><Link to="/reels" className="nav-link">📽 Reels</Link></li>
                <li><Link to="/messages" className="nav-link">✉ Messages</Link></li>
                <li><Link to="/notifications" className="nav-link">❤ Notifications</Link></li>
                <li><Link to="/create" className="nav-link">➕ Create</Link></li>
                <li><Link to="/profile" className="nav-link">👤 Profile</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
