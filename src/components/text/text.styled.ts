import styled from "styled-components";

export const StyledText = styled.p<{
  fontSize?: string,
  color?: string,
  fontWeight?: string
  display?: string
  $alignitems?: string
  $justifycontent?: string
  $gap?: string
  width?: string
  height?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  display: ${({ display }) => display};
  align-items: ${({ $alignitems }) => $alignitems};
  justify-content: ${({ $justifycontent }) => $justifycontent};
  gap: ${({ $gap }) => $gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
  
`