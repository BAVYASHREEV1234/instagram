import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <div className="comments">
      <input
        type="text"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleComment}>Post</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};




    
export default CommentSection;