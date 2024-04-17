import styled from "styled-components";

export const StyledSubTitle = styled.h4<{ $weight?: string }>`
    font-weight: ${({ $weight }) => $weight || "bold"};
`