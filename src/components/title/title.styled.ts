import styled from "styled-components";

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;  
`;

export const StyledTitle = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: normal;
`