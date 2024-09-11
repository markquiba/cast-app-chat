import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { db } from '../firebase';
import { orderBy, query, collection, onSnapshot } from 'firebase/firestore';
import styled from 'styled-components';
import { isEmpty } from 'ramda';
import { ChevronsDown } from 'react-feather';

const ChatBoxMessages = () => {
  const loggedInUserName = localStorage.getItem('userName');
  const [messages, setMessages] = useState([]);
  const [showJumpToLatestButton, setShowJumpToLatestButton] = useState(false);
  const endOfMessagesRef = useRef(null);
  const messageListRef = useRef(null);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const scrollToBottom = useCallback(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isEmpty(messages)) {
      scrollToBottom();
    }
  }, [scrollToBottom, messages]);

  const handleScroll = useCallback(() => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const atBottom =
      messageListRef.current.scrollHeight ===
      messageListRef.current.scrollTop + messageListRef.current.clientHeight;

    if (atBottom) {
      setShowJumpToLatestButton(false);
    } else {
      setScrollTimeout(
        setTimeout(() => {
          setShowJumpToLatestButton(true);
        }, 1000)
      );
    }
  }, [scrollTimeout]);

  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const renderMessages = useMemo(
    () =>
      messages.map((message) => (
        <Message
          key={message.id}
          isOwner={message.userName === loggedInUserName}
        >
          <strong>{message.userName}</strong>
          <MessageText>{message.text}</MessageText>
        </Message>
      )),
    [messages, loggedInUserName]
  );

  return (
    <ChatBoxContainer ref={messageListRef} onScroll={handleScroll}>
      {renderMessages}
      <div ref={endOfMessagesRef} />
      {showJumpToLatestButton && (
        <FloatingButton onClick={scrollToBottom}>
          Jump to latest.
          <ChevronsDown size={15} />
        </FloatingButton>
      )}
    </ChatBoxContainer>
  );
};

const ChatBoxContainer = styled.div`
  overflow-y: scroll;
  padding: 20px;
  position: relative;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 25px;
  background-color: ${({ isOwner }) => (isOwner ? '#0084FF' : '#F0F0F0')};
  color: ${({ isOwner }) => (isOwner ? '#FFF' : '#000')};
`;

const MessageText = styled.span`
  white-space: pre-wrap;
  display: block;
`;

const FloatingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ChatBoxMessages;
