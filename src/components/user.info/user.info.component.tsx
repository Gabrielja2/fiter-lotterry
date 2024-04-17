import { useState, useEffect } from 'react';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import { DivContainer, Button, Text, ModalMenu } from '../../components';

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
        <DivContainer
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='50px'
          height='50px'
          border='1px solid #707293'
          borderRadius='100%'
          background='#141420'
          color='#747495'
          fontSize='18px'
          fontWeight='bold'
          onClick={handleOpenMenu}
        >
          GA
        </DivContainer>
      ) : (
        <DivContainer
          display='flex'
          justifyContent='space-between'
          width='460px'
          height='36px'
        >
          <DivContainer
            display='flex'
            gap='15px'
            alignItems='center'
            height='36px'
          >
            <DivContainer
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='50px'
              height='50px'
              border='1px solid #707293'
              borderRadius='100%'
              background='#141420'
              color='#747495'
              fontSize='18px'
              fontWeight='bold'
            >
              GA
            </DivContainer>
            <DivContainer
              display='flex'
              alignItems='center'
              paddingRight='15px'
              borderRight='1px solid #707293'
            >
              <Text fontSize='16px' color='#0D67BD' fontWeight='bold'>
                id: fb24Hg...
              </Text>
              <Text fontSize='14px' color='#17E72C' fontWeight='bold'>
                R$: 50.000,00
              </Text>
            </DivContainer>
          </DivContainer>
          <DivContainer
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='234px'
          >
            <Button border='none' background='transparent'>
              <img src={LogoutIcon}></img>
            </Button>
          </DivContainer>
          <DivContainer
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Button
              display='flex'
              alignItems='center'
              justifyContent='center'
              gap='10px'
              fontSize='18px'
              fontWeight='bold'
              width='205px'
              height='47px'
              background='#2C3CCB'
              borderRadius='15px'
              border='none'
              color='#ffffff'
              transition='background-color 0.3s'
              hover='#14132d'
            >
              Compre Ticket <img src={CashIcon}></img>
            </Button>
          </DivContainer>
        </DivContainer>
      )}
      {isMenuOpen && <ModalMenu />}
    </>
  );
};
