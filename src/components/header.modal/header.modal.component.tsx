import { ModalContainer } from './header.modal.styled';
import LogoutIcon from '../../assets/icon_logout.png';
import CashIcon from '../../assets/cifrao1.png';
import { Text, Button } from '../../components';

type ModalMenuProps = {
  userId: string;
  onClick: () => void;
};
export const ModalMenu = ({ userId, onClick }: ModalMenuProps) => {
  return (
    <ModalContainer>
      <Text width='90px' fontSize='16px' color='#0D67BD' fontWeight='bold'>
        id: {userId}
      </Text>
      <Text width='90px' fontSize='14px' color='#17E72C' fontWeight='bold'>
        R$: 50.000,00
      </Text>
      <Button onClick={onClick} border='none' background='transparent'>
        <img src={LogoutIcon}></img>
      </Button>
      <Button
        background='#2C3CCB'
        borderradius='5px'
        border='none'
        color='#f2f2f2'
        width='100%'
        height='47px'
        display='flex'
        alignitems='center'
        justifycontent='center'
        gap='10px'
        fontSize='18px'
        fontWeight='bold'
        transition='background-color 0.3s'
        hover='#14132d'
        type='button'
      >
        Compre Ticket <img src={CashIcon}></img>
      </Button>
    </ModalContainer>
  );
};
