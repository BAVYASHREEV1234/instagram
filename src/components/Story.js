// src/components/Story.js
import React, { useState } from 'react';
import './Story.css';
import StoryModal from './StoryModal';
import StoryUpload from './StoryUpload';

function Story({ currentUser }) {
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);

    const handleAddStory = (url, type) => {
        setStories([...stories, { url, type, viewers: [] }]);
    };

    const handleViewStory = (story) => {
        // If current user is not already in the viewers list, add them
        if (!story.viewers.includes(currentUser)) {
            story.viewers.push(currentUser);
        }
        setSelectedStory(story);
    };

    const handleDeleteStory = (index) => {
        // Filter out the story to delete based on index
        setStories(stories.filter((_, i) => i !== index));
    };

    return (
        <div className="story-container">
            <StoryUpload onAddStory={handleAddStory} />
            {stories.map((story, index) => (
                <div key={index} className="story">
                    <div onClick={() => handleViewStory(story)}>
                        {story.type === "image" ? (
                            <img src={story.url} alt="User Story" />
                        ) : (
                            <video src={story.url} controls />
                        )}
                    </div>
                    {/* Delete button for each story */}
                    <button className="delete-button" onClick={() => handleDeleteStory(index)}>
                        Delete
                    </button>
                </div>
            ))}
            {selectedStory && (
                <StoryModal
                    story={selectedStory}
                    onClose={() => setSelectedStory(null)}
                    isOwner={currentUser === selectedStory.owner}
                />
            )}
        </div>
    );
}

export default Story;
