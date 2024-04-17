import styled from "styled-components";

export const StyledText = styled.p<{
  fontSize?: string,
  color?: string,
  fontWeight?: string
  display?: string
  alignItems?: string
  justifyContent?: string
  gap?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
`