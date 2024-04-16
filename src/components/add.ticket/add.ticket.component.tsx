import AddBtnIcon from '../../assets/botao-adicionar1.png';
import TicketIcon from '../../assets/ticket1.png';
import { StyledAddTicketContainer, StyledText } from './add.ticket.styled';

export const AddTicketCard = () => {
  return (
    <StyledAddTicketContainer>
      <StyledText>
        ADICIONAR BILHETE
        <img height={'35px'} width={'35px'} src={TicketIcon}></img>
      </StyledText>
      <img height={'50px'} width={'50px'} src={AddBtnIcon}></img>
    </StyledAddTicketContainer>
  );
};
