import React from 'react';
import styled from 'styled-components';
import { colors } from '../_variables';

const InputStyle = styled.input`
  border-radius: 3px;
  ${props =>
    props.error
      ? `border: 1px solid ${colors.red}`
      : `border: 1px solid ${colors.gray}`};

  padding: 10px 20px;
  letter-spacing: 0.25px;
  width: 100%;
  font-family: Work Sans;
  &:hover {
    cursor: pointer;
  }
  &::placeholder {
    color: ${colors.gray};
  }
  &:focus {
    outline: none;
  }
  font-size: 18px;
  font-weight: 400;
  transition: border 200ms ease;

  ${props => (props.style ? props.style : null)};
`;

const Input = ({ value, name, placeholder, ...props }) => {
  return (
    <>
      <InputStyle
        value={value}
        name={name}
        onChange={props.onChange}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export { Input };
