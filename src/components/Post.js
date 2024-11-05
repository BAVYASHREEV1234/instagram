// src/components/Post.js
import React, { useState } from 'react';
import './Post.css';

const Post = ({ image, username, caption, initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="post">
      <div className="post-header">
        <h4>{username}</h4>
      </div>
      <img src={image} alt="Post" className="post-image" />

      <div className="post-actions">
        <button onClick={handleLike} className={liked ? "liked" : ""}>
          ❤️
        </button>
        <button>💬</button> {/* Comment icon */}
        <button>📤</button> {/* Share icon */}
        <button>🔖</button> {/* Save icon */}
      </div>

      <div className="post-details">
        <span>{likes} likes</span>
        <p><strong>{username}</strong> {caption}</p>
      </div>
    </div>
  );
};

export default Post;



