// src/components/ContextMenu.js
import React from 'react';
import './ContextMenu.css'; // Optional: for styling

const ContextMenu = ({ xPos, yPos, onClose, onCopy, onDelete, onForward }) => {
  return (
    <div className="context-menu" style={{ left: xPos, top: yPos }}>
      <ul>
        <li onClick={onCopy}>Copy</li>
        <li onClick={onDelete}>Delete</li>
        <li onClick={onForward}>Forward</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
