// src/components/StoryUpload.js
import React from 'react';

function StoryUpload({ onAddStory, currentUser }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            const storyType = file.type.startsWith("image/") ? "image" : "video";
            onAddStory(previewUrl, storyType, currentUser);
        }
    };

    return (
        <div style={styles.storyUploadContainer}>
            <label style={styles.uploadButton}>
                ➕ Add Story
                <input
                    type="file"
                    accept="image/*, video/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </label>
        </div>
    );
}

const styles = { /* existing styles */ };

export default StoryUpload;
