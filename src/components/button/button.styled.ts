import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string, disabled?: boolean, type?: 'button' | 'submit' }>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  color: #f2f2f2;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #14132d;
  }
`;