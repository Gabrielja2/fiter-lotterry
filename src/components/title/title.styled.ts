import styled from "styled-components";

export const StyledTitleContainer = styled.div`
  display: flex;
  gap: 5px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

export const StyledTitle = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: normal;
  font-size: 24px;
`