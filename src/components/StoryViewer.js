// src/components/StoryViewer.js
import React, { useEffect } from 'react';

function StoryViewer({ story, onClose, currentUser }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    // If user is not already a viewer, add them
    if (!story.viewers.includes(currentUser)) {
        story.viewers.push(currentUser);
    }

    return (
        <div style={styles.viewerOverlay} onClick={onClose}>
            {story.type === "image" ? (
                <img src={story.url} alt="Story" style={styles.viewerMedia} />
            ) : (
                <video src={story.url} controls autoPlay style={styles.viewerMedia} />
            )}
        </div>
    );
}

const styles = { /* existing styles */ };

export default StoryViewer;
