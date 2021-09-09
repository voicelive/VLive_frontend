import { useState } from 'react';
import styled from '@emotion/styled';

import { socketClient } from '../../hooks/socket/useSocket';

export default function ChatForm() {
  const [input, setInput] = useState('');
  const channelId = '613a02b5c1c0e1fc6129ec3e';
  const user = {
    name: 'col ki',
    _id: '6138479e7aa76e11ace4898e',
  };

  function submitChat(ev) {
    ev.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const newChat = {
      author: user.name.replace(' ', ''),
      chat: trimmedInput,
      userId: user._id,
    };

    socketClient.emit('new chat', { channelId, newChat });
    setInput('');
  }

  function handleInputChange({ target }) {
    const { value } = target;
    setInput(value);
  }
  return (
    <Form>
      <input
        type="text"
        value={input}
        autoComplete="off"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={submitChat}>
        Enter
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: 80%;
    height: 40px;
    padding: 0px 20px;
    border: none;
    font-size: 16px;
    background-color: whitesmoke;

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
    background-color: lightGray;
  }
`;
