import React, { useState } from 'react';
import Story from '../components/Story';
import SuggestedUser from '../components/SuggestedUser';
import './Home.css';

function Home({ toggleDarkMode }) {
    const [isLiked1, setIsLiked1] = useState(false);
    const [likeCount1, setLikeCount1] = useState(506);
    const [isSaved1, setIsSaved1] = useState(false);
    const [comments1, setComments1] = useState([]);
    const [commentText1, setCommentText1] = useState('');
    const [showComments1, setShowComments1] = useState(false);

    const [isLiked2, setIsLiked2] = useState(false);
    const [likeCount2, setLikeCount2] = useState(732);
    const [isSaved2, setIsSaved2] = useState(false);
    const [comments2, setComments2] = useState([]);
    const [commentText2, setCommentText2] = useState('');
    const [showComments2, setShowComments2] = useState(false);

    // Functions for Post 1
    const handleLike1 = () => {
        setIsLiked1(!isLiked1);
        setLikeCount1(isLiked1 ? likeCount1 - 1 : likeCount1 + 1);
    };

    const handleSave1 = () => {
        setIsSaved1(!isSaved1);
        alert(isSaved1 ? "Post unsaved!" : "Post saved!");
    };

    const handleCommentSubmit1 = (e) => {
        e.preventDefault();
        if (commentText1.trim()) {
            setComments1([...comments1, { text: commentText1, isLiked: false, likeCount: 0 }]);
            setCommentText1('');
        }
    };

    const handleShare1 = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Post link copied to clipboard!");
    };

    const toggleCommentLike1 = (index) => {
        const updatedComments = [...comments1];
        updatedComments[index].isLiked = !updatedComments[index].isLiked;
        updatedComments[index].likeCount += updatedComments[index].isLiked ? 1 : -1;
        setComments1(updatedComments);
    };

    const deleteComment1 = (index) => {
        const updatedComments = comments1.filter((_, i) => i !== index);
        setComments1(updatedComments);
    };

    const toggleShowComments1 = () => {
        setShowComments1(!showComments1);
    };

    // Functions for Post 2
    const handleLike2 = () => {
        setIsLiked2(!isLiked2);
        setLikeCount2(isLiked2 ? likeCount2 - 1 : likeCount2 + 1);
    };

    const handleSave2 = () => {
        setIsSaved2(!isSaved2);
        alert(isSaved2 ? "Post unsaved!" : "Post saved!");
    };

    const handleCommentSubmit2 = (e) => {
        e.preventDefault();
        if (commentText2.trim()) {
            setComments2([...comments2, { text: commentText2, isLiked: false, likeCount: 0 }]);
            setCommentText2('');
        }
    };

    const handleShare2 = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Post link copied to clipboard!");
    };

    const toggleCommentLike2 = (index) => {
        const updatedComments = [...comments2];
        updatedComments[index].isLiked = !updatedComments[index].isLiked;
        updatedComments[index].likeCount += updatedComments[index].isLiked ? 1 : -1;
        setComments2(updatedComments);
    };

    const deleteComment2 = (index) => {
        const updatedComments = comments2.filter((_, i) => i !== index);
        setComments2(updatedComments);
    };

    const toggleShowComments2 = () => {
        setShowComments2(!showComments2);
    };

    return (
        <div className="home-container">
            <div className="feed">
                <div className="stories">
                    <Story />
                </div>

                {/* First Post */}
                <div className="post">
                    <div className="post-header">
                        <img src="\images\cooking logo.webp" alt="Profile" className="profile-pic" />
                        <span className="username">anits</span> • <span className="post-time">35m</span>
                    </div>
                    
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Mountain Scene" className="uploaded-image" />
                    </div>

                    <div className="post-icons">
                        <span onClick={handleLike1} style={{ cursor: 'pointer' }}>
                            {isLiked1 ? '❤️' : '🤍'}
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={toggleShowComments1}>💬</span>
                        <span onClick={handleShare1} style={{ cursor: 'pointer' }}>📤</span>
                        <span onClick={handleSave1} style={{ cursor: 'pointer' }}>
                            {isSaved1 ? '🔖 Saved' : '📄 Unsaved'}
                        </span>
                    </div>
                    
                    <div className="post-details">
                        <p><strong>anits</strong>Alone is permanent ...</p>
                        <p className="likes-count">{likeCount1} likes</p>
                        <p className="comments-count" onClick={toggleShowComments1} style={{ cursor: 'pointer' }}>
                            {showComments1 ? "Hide comments" : `View all ${comments1.length} comments`}
                        </p>
                    </div>

                    {/* Comments Section for Post 1 */}
                    {showComments1 && (
                        <div className="comments-section">
                            {comments1.map((comment, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <p style={{ margin: 0, flex: 1 }}>
                                        <strong>username</strong> {comment.text}
                                    </p>
                                    <span 
                                        onClick={() => toggleCommentLike1(index)} 
                                        style={{ cursor: 'pointer', marginRight: '8px' }}
                                    >
                                        {comment.isLiked ? '❤️' : '🤍'} {comment.likeCount}
                                    </span>
                                    <button onClick={() => deleteComment1(index)} style={{ cursor: 'pointer' }}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Add a Comment for Post 1 */}
                    <div className="add-comment">
                        <form onSubmit={handleCommentSubmit1} style={{ width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={commentText1}
                                onChange={(e) => setCommentText1(e.target.value)}
                                style={{ flex: 1 }}
                            />
                            <button type="submit" style={{ display: 'none' }}></button>
                        </form>
                    </div>
                </div>

                {/* Second Post */}
                <div className="post">
                    <div className="post-header">
                        <img src="/images/cooking logo.webp" alt="Profile" className="profile-pic" />
                        <span className="username">kirthi</span> • <span className="post-time">1h</span>
                    </div>
                    
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Flower Scene" className="uploaded-image" />
                    </div>

                    <div className="post-icons">
                        <span onClick={handleLike2} style={{ cursor: 'pointer' }}>
                            {isLiked2 ? '❤️' : '🤍'}
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={toggleShowComments2}>💬</span>
                        <span onClick={handleShare2} style={{ cursor: 'pointer' }}>📤</span>
                        <span onClick={handleSave2} style={{ cursor: 'pointer' }}>
                            {isSaved2 ? '🔖 Saved' : '📄 Unsaved'}
                        </span>
                    </div>
                    
                    <div className="post-details">
                        <p><strong>kirthi</strong> save and Love nature...</p>
                        <p className="likes-count">{likeCount2} likes</p>
                        <p className="comments-count" onClick={toggleShowComments2} style={{ cursor: 'pointer' }}>
                            {showComments2 ? "Hide comments" : `View all ${comments2.length} comments`}
                        </p>
                    </div>

                    {/* Comments Section for Post 2 */}
                    {showComments2 && (
                        <div className="comments-section">
                            {comments2.map((comment, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <p style={{ margin: 0, flex: 1 }}>
                                        <strong>user2</strong> {comment.text}
                                    </p>
                                    <span 
                                        onClick={() => toggleCommentLike2(index)} 
                                        style={{ cursor: 'pointer', marginRight: '8px' }}
                                    >
                                        {comment.isLiked ? '❤️' : '🤍'} {comment.likeCount}
                                    </span>
                                    <button onClick={() => deleteComment2(index)} style={{ cursor: 'pointer' }}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Add a Comment for Post 2 */}
                    <div className="add-comment">
                        <form onSubmit={handleCommentSubmit2} style={{ width: '100%' }}>
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={commentText2}
                                onChange={(e) => setCommentText2(e.target.value)}
                                style={{ flex: 1 }}
                            />
                            <button type="submit" style={{ display: 'none' }}></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="suggestions">
                <h4>Suggested for you</h4>
                <SuggestedUser username="Bavya" />
                <SuggestedUser username="Anish" />
            </div>
        </div>
    );
}

export default Home;
