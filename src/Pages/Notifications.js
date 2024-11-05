// src/Pages/Notifications.js
import React, { useState, useEffect } from 'react';

const Notifications = () => {
  // State to hold notifications
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching notifications
  useEffect(() => {
    const simulatedNotifications = [
      { id: 1, message: "John liked your comment", timestamp: new Date().toLocaleString() },
      { id: 2, message: "Sarah liked your photo", timestamp: new Date().toLocaleString() },
      { id: 3, message: "Mike commented on your post", timestamp: new Date().toLocaleString() }
    ];
    
    setNotifications(simulatedNotifications);
  }, []);

  return (
    <div>
      <h1>Notifications Page</h1>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>
              {notification.message} <span>{notification.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
