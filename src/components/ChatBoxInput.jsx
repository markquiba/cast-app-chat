import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ChatBoxInput = ({ onSend }) => {
  const [chatBoxInput, setChatBoxInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (chatBoxInput.trim()) {
      onSend(chatBoxInput);
      setChatBoxInput('');
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setChatBoxInput((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        handleSend();
      }
    }
  };

  return (
    <div>
      <button onClick={() => setShowEmojiPicker((previous) => !previous)}>
        🙂
      </button>
      <textarea
        value={chatBoxInput}
        onChange={(e) => setChatBoxInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>Send</button>
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
};

export default ChatBoxInput;
