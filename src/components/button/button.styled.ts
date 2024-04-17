import styled from 'styled-components';


export const StyledButton = styled.button<{
  type?: 'button' | 'submit',
  width?: string,
  $height?: string,
  $background?: string,
  color?: string,
  $fontWeight?: string,
  fontSize?: string,
  $borderradius?: string,
  $border?: string,
  $alignitems?: string,
  $justifycontent?: string,
  $padding?: string,
  $gap?: string,
  display?: string
  $transition?: string
  $hover?: string
  margin?: string
}>`
  display: ${({ display }) => display};
  align-items: ${({ $alignitems }) => $alignitems};
  justify-content: ${({ $justifycontent }) => $justifycontent};
  width: ${({ width }) => width};
  height: ${({ $height }) => $height};
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderradius }) => $borderradius};
  background-color: ${({ $background }) => $background};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  gap: ${({ $gap }) => $gap};
  padding: ${({ $padding }) => $padding};
  transition: ${({ $transition }) => $transition};  
  margin: ${({ margin }) => margin};
  cursor: pointer;

  &:hover {
  background-color: ${({ $hover }) => $hover};
}
`