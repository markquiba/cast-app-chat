import React, { useState } from 'react';
import styled from 'styled-components';
import { MessageCircle } from 'react-feather';

const ChatName = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setHasError(false);
      onSubmit(name);
    } else {
      setHasError(true);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        hasError={hasError}
      />
      <Button onClick={handleSubmit}>
        Join Chat
        <MessageCircle />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  height: 20px;
  min-width: 300px;
  padding: 20px;
  border-radius: 100px;
  border: 3px solid ${(props) => (props.hasError ? 'red' : '#ccc')};
  background-color: #f0f2f5;
  resize: none;
  font-size: 1.2em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #000;
  color: #fff;
  padding: 20px;
  margin: 10px;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
  cursor: pointer;
`;

export default ChatName;
