import styled from "styled-components";

export const StyledProfileContainer = styled.main`
    background-color: #0E0D30;
    
`

export const StyledSection = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding-block: 130px;
    padding-inline: 62px;

    @media (max-width: 768px) {
        padding-inline: 45px;
    }
 
`
