import styled from 'styled-components';

export const StyledHeaderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  height: 36px;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  height: 36px;
`

export const StyledUserDetails = styled.div`
  display: flex;
  flex-direction: column;  
`

export const StyledId = styled.p`
  font-size: 16px;
  color: #0D67BD;
  font-weight: bold;
`

export const StyledSaldo = styled.p`
  font-size: 14px;
  color: #17E72C;
  font-weight: bold;
`

export const StyledLogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  border-right: 1px solid #707293;

`

export const StyledTicketButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 234px;
`

export const StyledTicketButton = styled.button`
  width: 205px;
  height: 47px;
  border: none;
  border-radius: 10px;
  background-color: #2C3CCB;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`

export const StyledLogoutButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border : 1px solid #707293;
  border-radius: 100%;
  background-color: #141420;
  color: #747495;
  font-size: 18px;
  font-weight: bold;
`