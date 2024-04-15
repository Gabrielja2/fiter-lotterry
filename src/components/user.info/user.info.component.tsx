import {
  StyledHeaderInfoContainer,
  StyledUserInfo,
  StyledUserDetails,
  StyledId,
  StyledSaldo,
  StyledLogoutButtonContainer,
  StyledTicketButtonContainer,
  StyledTicketButton,
  StyledLogoutButton,
  StyledIcon,
} from './user.info.styled';
import Logout from '../../assets/icon_logout.png';

export const UserInfo = () => {
  return (
    <StyledHeaderInfoContainer>
      <StyledUserInfo>
        <StyledIcon>GA</StyledIcon>
        <StyledUserDetails>
          <StyledId>id: fb24Hg...</StyledId>
          <StyledSaldo>R$: 50.000,00</StyledSaldo>
        </StyledUserDetails>
      </StyledUserInfo>
      <StyledLogoutButtonContainer>
        <StyledLogoutButton>
          <img src={Logout}></img>
        </StyledLogoutButton>
      </StyledLogoutButtonContainer>
      <StyledTicketButtonContainer>
        <StyledTicketButton>Compre Ticket</StyledTicketButton>
      </StyledTicketButtonContainer>
    </StyledHeaderInfoContainer>
  );
};
