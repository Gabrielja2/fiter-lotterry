import styled from 'styled-components';


export const StyledForm = styled.form`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  gap: 40px;
  padding: 20px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  color: #0E0D30;
`;

export const Input = styled.input`
  width: 100%; 
  padding: 10px;
  border: 1px solid #0E0D30;
  border-radius: 5px;
  background-color: #959595;
  font-weight: 300;

  &:focus {   
    outline: none;
    background-color: #959595;
  } 
`;

export const Button = styled.button<{ color: string }>`
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

export const StyledError = styled.p`
  color: red;
  font-size: 12px;
`