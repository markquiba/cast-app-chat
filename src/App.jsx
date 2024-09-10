import React, { useState, useEffect, useCallback } from 'react';
import ChatName from './components/ChatName';
import ChatBoxInput from './components/ChatBoxInput';
import ChatBoxMessages from './components/ChatBoxMessages';
import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import styled from 'styled-components';
import { LogOut } from 'react-feather';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [userName, setUserName] = useState(null);
  const storedUserName = localStorage.getItem('userName');

  useEffect(() => {
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [storedUserName]);

  const handleNameSubmit = (name) => {
    toast(`Hello, ${name}!`, {
      duration: 5000,
      position: 'top-center',
      icon: '👏',
    });
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  const handleSignOut = () => {
    toast(`We are bummed to see you leave, ${storedUserName}.`, {
      duration: 5000,
      position: 'top-center',
      icon: '😭',
    });
    setUserName(null);
    localStorage.removeItem('userName');
  };

  const handleSendMessage = useCallback(
    async (text) => {
      await addDoc(collection(db, 'messages'), {
        userName,
        text,
        timestamp: serverTimestamp(),
      });
    },
    [userName]
  );

  return (
    <Container>
      <Toaster />
      {!userName ? (
        <ChatName onSubmit={handleNameSubmit} />
      ) : (
        <ChatBox>
          <ChatBoxMessages />
          <ChatBoxInput userName={userName} onSend={handleSendMessage} />
          <SignOutButton onClick={handleSignOut}>
            <SignOutText>Exit Chat</SignOutText>
            <LogOut />
          </SignOutButton>
        </ChatBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 450px;
  height: 90vh;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 5px;
`;

const SignOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  font-size: 16px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #404040;
  }
`;

const SignOutText = styled.span`
  padding: 0 20px;
`;

export default App;
