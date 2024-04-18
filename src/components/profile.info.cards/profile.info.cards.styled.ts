import styled from "styled-components";

export const StyledProfileInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    gap: 32px;  
    color: white;
    
    @media (max-width: 768px) {  
        align-items: center;
        flex-direction: column;
              
    }
`