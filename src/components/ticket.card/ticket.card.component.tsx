import { useState } from 'react';
import {
  StyledTicketCard,
  StyledText,
  StyledHeader,
  StyledFlexDiv,
  StyledButton,
} from './ticket.card.styled';

type TicketCardProps = {
  index: number;
};

function getPriceLabel(selectedNumbers: number): string {
  const fifiteenNumbersPrice = selectedNumbers === 15 ? '3,00' : '0,00';
  const sixteenNumbersPrice = selectedNumbers === 16 ? '100,00' : '0,00';
  const seventeenNumbersPrice = selectedNumbers === 17 ? '300,00' : '0,00';
  const eighteenNumbersPrice = selectedNumbers === 18 ? '5.000,00' : '0,00';
  const nineteenNumbersPrice = selectedNumbers === 19 ? '15.000,00' : '0,00';
  const twentyNumbersPrice = selectedNumbers === 20 ? '25.000,00' : '0,00';

  switch (selectedNumbers) {
    case 15:
      return fifiteenNumbersPrice;
    case 16:
      return sixteenNumbersPrice;
    case 17:
      return seventeenNumbersPrice;
    case 18:
      return eighteenNumbersPrice;
    case 19:
      return nineteenNumbersPrice;
    case 20:
      return twentyNumbersPrice;

    default:
      return '0,00';
  }
}

const ticketNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

export const TicketCard = ({ index }: TicketCardProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<{
    [key: number]: boolean;
  }>({});

  const selecteds = Object.values(selectedNumbers).filter(Boolean);
  const selectedCount = selecteds.length;

  const handleSelectNumber = (currentNumber: number) => {
    setSelectedNumbers((oldState) => ({
      ...oldState,
      [currentNumber]: !oldState[currentNumber],
    }));
  };

  return (
    <StyledTicketCard>
      <StyledHeader>
        <StyledText>BILHETE #{index}</StyledText>
        <StyledFlexDiv display='flex' gap='5px'>
          <StyledText>Valor:</StyledText>
          <StyledText color='#17E72C'>
            {getPriceLabel(selectedCount)}
          </StyledText>
        </StyledFlexDiv>
      </StyledHeader>
      <StyledText padding='10px 25px'>Selecionados: {selectedCount}</StyledText>
      <StyledFlexDiv
        display='grid'
        $gridTemplateColumns='repeat(5, 1fr)'
        gap='10px'
        margin=' 0px auto'
      >
        {ticketNumbers.map((currentNumber, index) => (
          <StyledButton
            key={index}
            color='#FFFFFF'
            fontSize='16px'
            background='#313051'
            $borderradius='100%'
            height='30px'
            wdith='30px'
            $alignitems='center'
            justifycontent='center'
            onClick={() => handleSelectNumber(currentNumber)}
          >
            {index + 1}
          </StyledButton>
        ))}
      </StyledFlexDiv>
    </StyledTicketCard>
  );
};
