import styled from 'styled-components';

type StyledTextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
  padding?: string;
  borderRadius?: string;
  wdith?: string;
  height?: string;
  alignitems?: string;
  justifycontent?: string;
};

export const StyledText = styled.p<StyledTextProps>`
  background-color: ${({ background }) => background};
  display: flex;
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  color: ${({ color }) => color || '#A7AACD'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ wdith }) => wdith};
  height: ${({ height }) => height};
  
`;

export const StyledTicketCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #177FE9 solid;
  width: 240px;
  height: 285px;
  margin-top: 30px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #177FE9 dotted;
  padding: 15px;
`;

export const StyledFlexDiv = styled.div<{
  display?: string;
  gap?: string;
  alignitems?: string;
  wrap?: string;
  justifycontent?: string;
  flexDirection?: string;
  padding?: string;
  gridTemplateColumns?: string;
  width?: string;
  border?: string;
  margin?: string;
}>`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  border: ${({ border }) => border}; 
  margin: ${({ margin }) => margin};
  
`;