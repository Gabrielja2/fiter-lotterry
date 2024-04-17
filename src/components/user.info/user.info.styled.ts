import styled from 'styled-components';

export const StyledDiv = styled.div<{
  background?: string,
  color?: string,
  display?: string,
  alignitems?: string,
  justifycontent?: string
  flexDirection?: string
  gap?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  borderRadius?: string
  border?: string
  borderBottom?: string
  borderRight?: string
  borderLeft?: string
  borderTop?: string
  paddingTop?: string
  paddingBottom?: string
  paddingRight?: string
  paddingLeft?: string
  fontSize?: string
  fontWeight?: string
}>`
  display: ${({ display }) => display};
  align-items: ${({ alignitems }) => alignitems};
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
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-right: ${({ borderRight }) => borderRight};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top: ${({ borderTop }) => borderTop};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`