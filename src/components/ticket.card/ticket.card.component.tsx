import {
  StyledTicketCard,
  StyledText,
  StyledHeader,
} from './ticket.card.styled';

export const TicketCard = () => {
  return (
    <StyledTicketCard>
      <StyledHeader>
        <StyledText>BILHETE #1</StyledText>
        <StyledText>Valor: R$ 3,00</StyledText>
      </StyledHeader>
      <div>
        <StyledText>Selecionados: 15</StyledText>
        <StyledText>TicketNumbers</StyledText>
      </div>
    </StyledTicketCard>
  );
};
