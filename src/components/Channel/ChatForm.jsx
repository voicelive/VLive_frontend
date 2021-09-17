import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { getSocketClient } from '../../hooks/socket/useSocket';
import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';

import ErrorBox from '../ErrorBox';

export default function ChatForm() {
  const {
    query: { channelId },
  } = useRouter();
  const [input, setInput] = useState({
    author: '',
    chat: '',
  });
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(sessionStorage.getItem('user'));
    setUserName(name);
    setInput({ ...input, author: userName.replace(' ', '') });
  }, []);

  async function submitChat(ev) {
    ev.preventDefault();

    try {
      const response = await fetch(`${API.URL}/chat`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channelId,
          input,
        }),
      });

      const { result, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }

    getSocketClient().emit(EVENTS.NEW_CHAT, { channelId, input });

    setInput({
      author: userName?.replace(' ', ''),
      chat: '',
    });
  }

  function handleChatInput({ target }) {
    const { value } = target;
    const trimmedChat = value.trim();

    if (trimmedChat === '') return;

    setInput({
      ...input,
      chat: trimmedChat,
    });
  }

  return (
    <Form onSubmit={submitChat}>
      <input
        type="text"
        value={input.chat}
        autoComplete="off"
        onChange={handleChatInput}
      />
      <button type="submit">Enter</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.white};

  input {
    width: 80%;
    height: 40px;
    padding: 0px 20px;
    border: none;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  button {
    display: inline-block;
    width: 15%;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.blue};
  }
`;
