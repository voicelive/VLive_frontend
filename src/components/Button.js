import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from './styles/theme';

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  color: theme.pink,
};

const StyledButton = styled.button`
  all: unset;
  width: 130px;
  height: 20px;
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  transition-property: scale, translateY;
  transition: scale 300ms ease-in;
  color: white;

  &:hover {
    transform: scale(1.02);
  }
`;
