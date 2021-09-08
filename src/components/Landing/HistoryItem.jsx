import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

export default function HistoryItem({ channel: { name, episode } }) {
  return (
    <Wrapper>
      <h3>{`${name} ${episode}`}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  width: 500px;
  margin: 10px auto;
  border-bottom: 1px solid #575757;
  color: #ffffff;

  &:hover {
    border-bottom: 2px solid ${theme.pink};
  }

  h3 {
    font-size: 1.5em;
    font-weight: 200;
  }
`;

HistoryItem.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
    audience: PropTypes.array.isRequired,
    episode: PropTypes.string.isRequired,
  }),
};
