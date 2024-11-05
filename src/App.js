// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ForgotPassword from './Pages/ForgotPassword';
import Search from './Pages/search';
import Explore from './Pages/explore';
import Reels from './Pages/Reels';
import Messages from './Pages/Messages';
import Notifications from './Pages/Notifications';
import Create from './Pages/Create';
import Profile from './Pages/Profile';
import ProtectedLayout from './components/ProtectedLayout'; // Importing ProtectedLayout


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes with ProtectedLayout */}
          <Route element={<ProtectedLayout isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} />} />
            <Route path="/home" element={<Home toggleDarkMode={toggleDarkMode} />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Redirect to login if no matching route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
