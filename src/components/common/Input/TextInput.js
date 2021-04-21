import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  color: ${props => props.theme.colors.textColorPrimary};
  padding: 0 ${props => props.theme.spacing.padding}px;
  background-color: ${props => props.theme.colors.background};
  font-size: 16px;
  transition: all 0.2s;
  
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:focus {
    outline-color: ${props => props.theme.colors.primary};
  }
`;

const TextInput = props => {
  return (
    <Input {...props}/>
  );
};

TextInput.defaultProps = {
  fullWidth: false
}

TextInput.propTypes = {
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TextInput;
