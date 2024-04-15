import styled from "styled-components";

export const StyledProfileInfoContainer = styled.div`
    display: flex;
    gap: 32px;
    height: 115px;    
    color: white;
    
    @media (max-width: 768px) {  
        align-items: center;    
        flex-direction: column;       
    }
`