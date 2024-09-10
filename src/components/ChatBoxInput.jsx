import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { Smile } from 'react-feather';

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
    <ChatInputContainer>
      <TextArea
        value={chatBoxInput}
        onChange={(e) => setChatBoxInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Aa"
      />
      <EmojiSelector
        onClick={() => setShowEmojiPicker((previous) => !previous)}
      >
        <Smile />
      </EmojiSelector>
      {showEmojiPicker && (
        <EmojiPickerContainer>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </EmojiPickerContainer>
      )}
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const EmojiSelector = styled.div`
  border: none;
  background: none;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  flex: 1;
  height: 20px;
  padding: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 100px;
  background-color: #f0f2f5;
  resize: none;
  font-size: 1.2em;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1000;
`;

export default ChatBoxInput;
