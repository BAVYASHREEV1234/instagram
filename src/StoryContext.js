// StoryContext.js
import React, { createContext, useState } from 'react';

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
    const [storyImage, setStoryImage] = useState(null);

    return (
        <StoryContext.Provider value={{ storyImage, setStoryImage }}>
            {children}
        </StoryContext.Provider>
    );
};
