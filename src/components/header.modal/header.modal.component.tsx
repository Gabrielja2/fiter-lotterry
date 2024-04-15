import { ModalContainer } from './header.modal.styled';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import {
  StyledId,
  StyledLogoutButton,
  StyledSaldo,
  StyledTicketButton,
} from '../user.info/user.info.styled';

export const ModalMenu = () => {
  return (
    <ModalContainer>
      <StyledId>id: fb24Hg..</StyledId>
      <StyledSaldo>R$: 50.000,00</StyledSaldo>
      <StyledLogoutButton>
        <img src={LogoutIcon}></img>
      </StyledLogoutButton>
      <StyledTicketButton width='100%'>
        Compre Ticket <img src={CashIcon}></img>
      </StyledTicketButton>
    </ModalContainer>
  );
};
