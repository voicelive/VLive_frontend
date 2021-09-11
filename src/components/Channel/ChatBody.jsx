import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useChat from '../../hooks/useChat';
import { useSocket } from '../../hooks/socket/useSocket';

export default function ChatBody() {
  const {
    query: { channelId },
  } = useRouter();
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
              <Content key={`${author}${Date.now(index)}`}>
                <span className="author">{author}</span>
                <span>{chat}</span>
              </Content>
            ))
          : null}
      </ul>
    </Contents>
  );
}

const Contents = styled.div`
  height: 85%;
  padding-top: 5px;
  box-sizing: border-box;
  border-inline: 2px solid ${({ theme }) => theme.darkNavy};
  background-color: ${({ theme }) => theme.darkNavy};
  overflow-y: auto;
  color: white;

  .chat-list {
    padding: 10px 0 0 10px;
    list-style: none;
    text-align: left;
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
