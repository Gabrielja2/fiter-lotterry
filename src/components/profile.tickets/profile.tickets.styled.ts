import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #191B3D;
    border-radius: 10px;    
    /* height: 568px; */

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        align-items: center;
    }
`

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 40px;
    height: 60px;
    padding: 20px 27px;
    border-bottom: 2px #212144 solid;
`

export const StyledNav = styled.nav<{ color: string, $border?: string }>`
    display: flex;
    gap: 10px;
    height: 100%;
    align-items: center;
    color: ${({ color }) => color};
    font-weight: bold;
    padding: 30px 0px;
    font-size: 14px;
    border-bottom: ${({ $border }) => $border || '2px #212144 solid'}; ;

`

export const StyledSpan = styled.span`
    color: #ffffff;
    background-color: #177FE9;
    border-radius: 45%;
    padding: 3px 9px;
    font-size: 10px;
    font-weight: bold;
`

export const StyledAddTicketContainer = styled.div`
    display: flex;
    align-items: start;
    padding: 10px 27px;
    justify-content: center;
    flex-direction: column;

`

export const StyledBuyTicketsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;   
`

export const StyledTicketsButton = styled.button<{ width?: string, height?: string, background?: string, color?: string }>`
    width: ${({ width }) => width || '259px'};
    height: ${({ height }) => height || '65px'};
    border: none;
    border-radius: 10px;
    background-color: ${({ background }) => background || '#2546F4'};
    font-size: 18px;
    color: ${({ color }) => color || '#ffffff'};
    font-weight: bold;
    cursor: pointer;
`

export const StyledFooterContainer = styled.div`
    display: flex;
    align-items: center;   
    padding: 10px 27px;
`

export const StyledFooterText = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #747495;
    font-size: 12px;
    font-weight: bold;
    
    @media (max-width: 768px) {       
        font-size: 10px;
    }
`

export const StyledTicketContainer = styled.div`
    display: flex;
    flex-wrap: wrap;    
`

export const StyledTotalContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px 27px;
`

export const StyledTotal = styled.p`
    font-weight: bold;
    font-size: 12px;
    color: #A7AACD;
`

export const StyledTotalPrice = styled.p`
    font-weight: bold;
    font-size: 12px;
    color: #17E72C;
`

export const StyledTicketCardContainer = styled.div`
     display: flex;
    align-items: start;
    padding: 10px 27px;
    justify-content: center;
    flex-direction: column;
`
