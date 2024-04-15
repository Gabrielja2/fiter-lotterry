import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #191B3D;
    border-radius: 10px;  
    height: 100vh;
    width: 90%;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }
`

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    align-items: center;    
    gap: 40px;
    height: 50px;
    padding: 20px 27px;
    border-bottom: 2px #212144 solid;
`

export const StyledNav = styled.nav<{ color: string, borderBottom?: string }>`
    display: flex;
    gap: 10px;
    height: 100%;    
    align-items: center;
    color: ${({ color }) => color};
    font-weight: bold;
    padding: 24px 0px;
    font-size: 14px;
    border-bottom: ${({ borderBottom }) => borderBottom || '2px #212144 solid'}; ;

   
`