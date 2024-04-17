import {
  StyledTicketCard,
  StyledText,
  StyledHeader,
  StyledFlexDiv,
} from './ticket.card.styled';

export const TicketCard = () => {
  const ticketNumbers = 25;
  return (
    <StyledTicketCard>
      <StyledHeader>
        <StyledText>BILHETE #1</StyledText>
        <StyledFlexDiv display='flex' gap='5px'>
          <StyledText>Valor:</StyledText>
          <StyledText color='#17E72C'>R$ 3,00</StyledText>
        </StyledFlexDiv>
      </StyledHeader>
      <StyledText padding='10px 25px'>Selecionados: 15</StyledText>
      <StyledFlexDiv
        display='grid'
        gridTemplateColumns='repeat(5, 1fr)'
        gap='10px'
        margin=' 0px auto'
      >
        {[...Array(ticketNumbers)].map((_, index) => (
          <StyledText
            key={index}
            color='#FFFFFF'
            fontSize='16px'
            background='#313051'
            borderRadius='100%'
            height='30px'
            wdith='30px'
            alignItems='center'
            justifyContent='center'
          >
            {index + 1}
          </StyledText>
        ))}
      </StyledFlexDiv>
    </StyledTicketCard>
  );
};
