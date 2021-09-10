import styled from '@emotion/styled';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import useChat from '../../hooks/useChat';
import { useSocket } from '../../hooks/socket/useSocket';

export default function ChatBody({ channelId }) {
  const { chatList, mutate } = useChat(channelId);
  const chatRef = useRef();

  useSocket('listen new chat', (updatedChatList) => {
    mutate(updatedChatList);
  });

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatList]);

  return (
    <Contents ref={chatRef}>
      <ul className="chat-list">
        {chatList
          ? chatList.map(({ author, chat }, index) => (
              <Content key={index}>
                <span className="author">{author}</span>
                <span>{chat}</span>
              </Content>
            ))
          : null}
      </ul>
    </Contents>
  );
}

ChatBody.propTypes = {
  channelId: PropTypes.string.,
};

const Contents = styled.div`
  height: 85%;
  padding-top: 5px;
  box-sizing: border-box;
  border-inline: 2px solid ${({ theme }) => theme.darkNavy};
  background-color: ${({ theme }) => theme.darkNavy};
  overflow-y: auto;
  color: white;

  .chat-list {
    list-style: none;
    padding: 0 0 0 10px;
  }
`;

const Content = styled.li`
  margin-top: 5px;

  .author {
    margin-right: 10px;
    padding: 0 5px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 14px;
    background-color: #d6d6d6;
    color: ${({ theme }) => theme.darkNavy};
  }
`;
