import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin: 10px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default Toggle;