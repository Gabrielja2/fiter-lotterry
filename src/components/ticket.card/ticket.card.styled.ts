import styled from 'styled-components';

export const StyledFlexDiv = styled.div<{
  display?: string;
  $gap?: string;
  alignitems?: string;
  wrap?: string;
  justifycontent?: string;
  flexDirection?: string;
  padding?: string;
  $gridTemplateColumns?: string;
  width?: string;
  $border?: string;
  $margin?: string;
}>`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ $gap }) => $gap};
  padding: ${({ padding }) => padding};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
  border: ${({ $border }) => $border}; 
  margin: ${({ $margin }) => $margin};
  
`;