import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%; 
  padding: 10px;
  border: 1px solid #0E0D30;
  border-radius: 5px;
  background-color: #959595;
  font-weight: 300;

  &:focus {   
    outline: none;  
  }
  
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #959595 inset;
  }
`;