// src/components/StoryModal.js
import React from 'react';
import './StoryModal.css';

const StoryModal = ({ story, onClose, isOwner }) => {
    if (!story) return null;

    return (
        <div className="story-modal-overlay" onClick={onClose}>
            <div className="story-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Story</h2>
                {story.type === "image" ? (
                    <img src={story.url} alt="Story" />
                ) : (
                    <video src={story.url} controls autoPlay />
                )}
                {/* Show Viewers if user is the owner */}
                {isOwner && (
                    <div className="viewers-list">
                        <h3>Viewed by:</h3>
                        {story.viewers.map((viewer, index) => (
                            <p key={index}>{viewer}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoryModal;
