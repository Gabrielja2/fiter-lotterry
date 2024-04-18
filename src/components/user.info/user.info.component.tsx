import { useState, useEffect } from 'react';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import { DivContainer, Button, Text, ModalMenu } from '../../components';
import { useNavigate } from 'react-router-dom';
import { DisplayDesktop, DisplayMobile } from './user.info.styled';
import { LoginResponse } from '../../types';

export const UserInfo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<LoginResponse>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const localUserData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!token || !localUserData) {
      navigate('/login');
      return;
    }

    setUserData(localUserData);
  }, [navigate]);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <DisplayMobile>
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
          {userData?.user.email.slice(0, 2).toUpperCase()}
        </DivContainer>
      </DisplayMobile>
      <DisplayDesktop>
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
              {userData?.user.email.slice(0, 2).toUpperCase()}
            </DivContainer>
            <DivContainer display='flex' flexdirection='column'>
              <Text
                width='90px'
                fontSize='16px'
                color='#0D67BD'
                fontWeight='bold'
              >
                id: {userData?.user.id}
              </Text>

              <Text
                width='100px'
                fontSize='14px'
                color='#17E72C'
                fontWeight='bold'
              >
                {userData?.user.balance?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
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
      </DisplayDesktop>
      {isMenuOpen && (
        <ModalMenu
          userId={userData?.user.id as string}
          onClick={handleLogout}
        />
      )}
    </>
  );
};
