import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { socketClient } from '../../hooks/socket/useSocket';

export default function ChatForm({ channelId }) {
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(sessionStorage.getItem('user'));
    setUserName(name);
  }, []);

  function submitChat(ev) {
    ev.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const newChat = {
      author: userName.replace(' ', ''),
      chat: trimmedInput,
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

ChatForm.propTypes = {
  channelId: PropTypes.string.isRequired,
};

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
