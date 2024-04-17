import styled from 'styled-components';

export const StyledDiv = styled.div<{
  background?: string,
  color?: string,
  display?: string,
  $alignitems?: string,
  justifycontent?: string
  flexDirection?: string
  gap?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  borderRadius?: string
  $border?: string
  fontSize?: string
  fontWeight?: string
}>`
  display: ${({ display }) => display};
  align-items: ${({ $alignitems }) => $alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ $border }) => $border};
  
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`