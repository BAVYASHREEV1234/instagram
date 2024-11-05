import React, { useRef, useState } from 'react';

const Create = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // References for each file input
  const postInputRef = useRef(null);
  const storyInputRef = useRef(null);
  const reelInputRef = useRef(null);

  // Function to handle file selection and preview display
  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedMedia(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Functions to open each file selector
  const openPostSelector = () => postInputRef.current.click();
  const openStorySelector = () => storyInputRef.current.click();
  const openReelSelector = () => reelInputRef.current.click();

  return (
    <div>
      <h1>Create New</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {/* Post Button */}
        <button type="button" onClick={openPostSelector}>
          Post
        </button>
        <input
          type="file"
          ref={postInputRef}
          accept="image/*,video/*"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />

        {/* Story Button */}
        <button type="button" onClick={openStorySelector}>
          Story
        </button>
        <input
          type="file"
          ref={storyInputRef}
          accept="image/*,video/*"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />

        {/* Reel Button */}
        <button type="button" onClick={openReelSelector}>
          Reel
        </button>
        <input
          type="file"
          ref={reelInputRef}
          accept="image/*,video/*"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
      </div>

      {/* Display selected media preview if any */}
      {selectedMedia && (
        <div>
          <h3>Selected Media Preview:</h3>
          <img src={selectedMedia} alt="Selected Media" style={{ width: '100%', maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default Create;
