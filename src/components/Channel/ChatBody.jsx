import styled from '@emotion/styled';
import { useState } from 'react';

import { useSocket } from '../../hooks/socket/useSocket';

export default function ChatBody() {
  const [contents, setContents] = useState([]);

  useSocket('listen new chat', (updatedContents) => {
    setContents(updatedContents);
  });

  return (
    <Contents>
      <ul>
        {!!contents.length &&
          contents.map(({ userId, author, chat }) => (
            <Content key={userId}>
              <span className="author">{author}</span>
              <p>{chat}</p>
            </Content>
          ))}
      </ul>
    </Contents>
  );
}

const Contents = styled.div`
  height: 85%;
  background-color: ${({ theme }) => theme.darkNavy};
  color: white;
  overflow-y: auto;
`;

const Content = styled.li`
  list-style: none;

  .author {
    display: inline-block;
  }
`;
