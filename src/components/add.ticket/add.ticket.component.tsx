import AddBtnIcon from '../../assets/botao-adicionar1.png';
import TicketIcon from '../../assets/ticket1.png';
import { StyledAddTicket, StyledButton } from './add.ticket.styled';

export const AddTicket = (props: { onClick: () => void }) => {
  return (
    <StyledAddTicket>
      <StyledButton onClick={props.onClick}>
        ADICIONAR BILHETE
        <img height={'35px'} width={'35px'} src={TicketIcon}></img>
      </StyledButton>
      <StyledButton onClick={props.onClick}>
        <img height={'50px'} width={'50px'} src={AddBtnIcon}></img>
      </StyledButton>
    </StyledAddTicket>
  );
};
