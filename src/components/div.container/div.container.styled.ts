import styled from 'styled-components';

export const StyledDiv = styled.div<{
  $background?: string,
  color?: string,
  display?: string,
  $alignitems?: string,
  $justifycontent?: string
  $flexdirection?: string
  $gap?: string
  margin?: string
  $padding?: string
  width?: string
  height?: string
  $borderradius?: string
  $border?: string
  $borderright?: string
  fontSize?: string
  fontWeight?: string
}>`
  display: ${({ display }) => display};
  align-items: ${({ $alignitems }) => $alignitems};
  justify-content: ${({ $justifycontent }) => $justifycontent};
  flex-direction: ${({ $flexdirection }) => $flexdirection};
  color: ${({ color }) => color};
  background: ${({ $background }) => $background};
  gap: ${({ $gap }) => $gap};
  margin: ${({ margin }) => margin};
  padding: ${({ $padding }) => $padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ $borderradius }) => $borderradius};
  border: ${({ $border }) => $border};
  border-right: ${({ $borderright }) => $borderright};  
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`