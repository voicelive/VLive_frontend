import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function Button({ children, color, onClick }) {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: undefined,
};

const StyledButton = styled.button`
  all: unset;
  width: 150px;
  height: 20px;
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ color, theme }) => color || theme.pink};
  transition-property: scale, translateY;
  transition: scale 300ms ease-in;
  color: white;

  &:hover {
    transform: scale(1.02);
  }
`;
