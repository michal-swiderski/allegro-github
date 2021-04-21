import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  color: white;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary};
  height: 40px;
  padding: 0 ${props => props.theme.spacing.padding}px;
  transition: background-color 0.2s;

  width: ${props => props.fullWidth ? '100%' : 'auto'};

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
  }
`;

const Button = props => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
};

Button.propTypes = {
  fullWidth: PropTypes.bool
};

export default Button;
