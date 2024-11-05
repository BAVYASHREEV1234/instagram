import React, { useState } from 'react';
import './Messaging.css';
import ContextMenu from '../components/ContextMenu'; 

const Messaging = () => {
  const [messages] = useState([
    { id: 1, name: "Kiruthika", lastMessage: "Na padamey paakala d", time: "1h", messages: [] },
    { id: 2, name: "_in_ara", lastMessage: "sent an attachment", time: "1h", messages: [] },
    { id: 3, name: "Shaju", lastMessage: "Active 2m ago", time: "2m", messages: [] },
    { id: 4, name: "Kaviya", lastMessage: "Active 13m ago", time: "13m", messages: [] },
    { id: 5, name: "Abi", lastMessage: "Active 58m ago", time: "58m", messages: [] },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [currentMessage, setCurrentMessage] = useState(null); // Store the message for context menu actions

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const updatedChat = { ...selectedChat, messages: [...(selectedChat.messages || []), newMessage] };
      setSelectedChat(updatedChat);
      setNewMessage("");
    }
  };

  const handleRightClick = (e, message) => {
    e.preventDefault(); // Prevent the default context menu
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setContextMenuVisible(true);
    setCurrentMessage(message);
  };

  const handleCloseMenu = () => {
    setContextMenuVisible(false);
  };

  const handleDelete = () => {
    if (selectedChat && currentMessage) {
      const updatedMessages = selectedChat.messages.filter(msg => msg !== currentMessage);
      setSelectedChat({ ...selectedChat, messages: updatedMessages });
      handleCloseMenu();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMessage); // Copy to clipboard
    handleCloseMenu();
  };

  const handleForward = () => {
    // Logic to forward the message
    console.log('Forwarded:', currentMessage);
    handleCloseMenu();
  };

  return (
    <div className="messaging-container">
      {/* Sidebar with messages list */}
      <div className="sidebar">
        <h2>Messages</h2>
        <ul>
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => handleChatSelect(msg)}
              className={selectedChat?.id === msg.id ? "active" : ""}
            >
              <div className="profile-pic-placeholder">{msg.name.charAt(0)}</div>
              <div>
                <strong>{msg.name}</strong>
                <p>{msg.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat area */}
      <div className="chat-area">
        {selectedChat ? (
          <>
            <h2>{selectedChat.name}</h2>
            <div className="chat-messages">
              {(selectedChat.messages || []).map((message, index) => (
                <div
                  key={index}
                  className="message"
                  onContextMenu={(e) => handleRightClick(e, message)} // Right-click to show menu
                >
                  {message}
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
            {contextMenuVisible && (
              <ContextMenu
                xPos={menuPosition.x}
                yPos={menuPosition.y}
                onClose={handleCloseMenu}
                onCopy={handleCopy}
                onDelete={handleDelete}
                onForward={handleForward}
              />
            )}
          </>
        ) : (
          <div className="no-chat-selected">
            <img src="/images/message icon.png" alt="Messenger Icon" />
            <p>Your messages</p>
            <button onClick={() => alert("Start a new chat")}>Send message</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messaging;
