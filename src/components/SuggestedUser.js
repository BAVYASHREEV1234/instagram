// SuggestedUser.js
import React, { useState } from 'react';

function SuggestedUser({ username }) {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollowToggle = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <div className="suggested-user">
            <span>{username}</span>
            <button onClick={handleFollowToggle} style={{ marginLeft: '10px' }}>
                {isFollowed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    );
}

export default SuggestedUser;

