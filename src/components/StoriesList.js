import React from 'react';

function StoriesList({ stories, onViewStory }) {
    return (
        <div style={styles.storiesContainer}>
            {stories.map((story, index) => (
                <div key={index} style={styles.storyPreview} onClick={() => onViewStory(story)}>
                    {story.type === "image" ? (
                        <img src={story.url} alt="Story" style={styles.storyImage} />
                    ) : (
                        <video src={story.url} style={styles.storyVideo} />
                    )}
                </div>
            ))}
        </div>
    );
}

const styles = {
    storiesContainer: {
        display: 'flex',
        gap: '10px',
        padding: '10px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    },
    storyPreview: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    storyImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    storyVideo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default StoriesList;