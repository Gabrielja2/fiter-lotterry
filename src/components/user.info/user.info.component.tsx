import { useState, useEffect } from 'react';
import {
  StyledHeaderInfoContainer,
  StyledUserInfo,
  StyledUserDetails,
  StyledId,
  StyledSaldo,
  StyledLogoutButtonContainer,
  StyledTicketButtonContainer,
  StyledLogoutButton,
  StyledTicketButton,
  StyledIcon,
} from './user.info.styled';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import { ModalMenu } from '../header.modal';

export const UserInfo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    console.log('open menu', isMenuOpen);

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isSmallScreen ? (
        <StyledIcon onClick={handleOpenMenu}>GA</StyledIcon>
      ) : (
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
              <img src={LogoutIcon}></img>
            </StyledLogoutButton>
          </StyledLogoutButtonContainer>
          <StyledTicketButtonContainer>
            <StyledTicketButton>
              Compre Ticket <img src={CashIcon}></img>
            </StyledTicketButton>
          </StyledTicketButtonContainer>
        </StyledHeaderInfoContainer>
      )}
      {isMenuOpen && <ModalMenu />}
    </>
  );
};
