import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: 'bavyavelmurugan',
    bio: 'B@V¥@₹$|-|❤️REE 🌸',
    age: 20,
    status: 'Driven by Optimism ✏️'
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert('Profile updated');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  const handleSharePhoto = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="/images/download.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2 className="username">{profileData.username}</h2>
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={() => alert('View Archive clicked')}>View Archive</button>
          <div className="profile-stats">
            <p><strong>0</strong> posts</p>
            <p><strong>97</strong> followers</p>
            <p><strong>388</strong> following</p>
          </div>
          <div className="profile-bio">
            <p>{profileData.bio}</p>
            <p>{profileData.age} 🌸 {profileData.status}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <p className="no-posts">Share Photos</p>
        <p>When you share photos, they will appear on your profile.</p>
        <button onClick={handleSharePhoto}>Share your first photo</button>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <label>
              Username:
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
              />
            </label>
            <label>
              Bio:
              <input
                type="text"
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={profileData.age}
                onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
              />
            </label>
            <label>
              Status:
              <input
                type="text"
                value={profileData.status}
                onChange={(e) => setProfileData({ ...profileData, status: e.target.value })}
              />
            </label>
            <button onClick={handleSaveProfile}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
