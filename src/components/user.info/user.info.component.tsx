import { useState, useEffect } from 'react';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import { DivContainer, Button, Text, ModalMenu } from '../../components';
import { useNavigate } from 'react-router-dom';

export const UserInfo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || '';
  console.log('token', token);
  // if (!token) {
  //   const userEmail = authenticationAdapter.decodeJsonWebToken(token as string);
  //   console.log('userEmail', userEmail);
  // }

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
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      {isSmallScreen ? (
        <DivContainer
          display='flex'
          alignitems='center'
          justifycontent='center'
          width='50px'
          height='50px'
          padding='5px 10px'
          border='1px solid #707293'
          borderradius='100%'
          background='#141420'
          color='#747495'
          fontSize='18px'
          fontWeight='bold'
          onClick={handleOpenMenu}
        >
          GA
        </DivContainer>
      ) : (
        <DivContainer display='flex' gap='20px' height='34px'>
          <DivContainer display='flex' alignitems='center' gap='10px'>
            <DivContainer
              display='flex'
              alignitems='center'
              width='50px'
              height='50px'
              padding='10px'
              border='1px solid #707293'
              borderradius='100%'
              background='#141420'
              color='#747495'
              fontSize='18px'
              fontWeight='bold'
            >
              GA
            </DivContainer>
            <DivContainer display='flex' flexdirection='column'>
              <Text
                width='90px'
                fontSize='16px'
                color='#0D67BD'
                fontWeight='bold'
              >
                id: {token}
              </Text>

              <Text
                width='100px'
                fontSize='14px'
                color='#17E72C'
                fontWeight='bold'
              >
                R$: 50.000,00
              </Text>
            </DivContainer>
          </DivContainer>
          <DivContainer
            padding='0px 10px 0px 0px'
            display='flex'
            borderright='1px #707293 solid'
          >
            <Button
              onClick={handleLogout}
              border='none'
              background='transparent'
            >
              <img src={LogoutIcon}></img>
            </Button>
          </DivContainer>
          <DivContainer
            display='flex'
            justifycontent='center'
            alignitems='center'
          >
            <Button
              display='flex'
              alignitems='center'
              justifycontent='center'
              gap='10px'
              fontSize='18px'
              fontWeight='bold'
              width='205px'
              height='47px'
              background='#2C3CCB'
              borderradius='15px'
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
      {isMenuOpen && <ModalMenu userId={token} onClick={handleLogout} />}
    </>
  );
};
