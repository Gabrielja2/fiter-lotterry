/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { StyledFlexDiv } from './ticket.card.styled';
import { Button, DivContainer, Text } from '../../components';
import TotalContext from '../../context/total.context';
type TicketCardProps = {
  index: number;
};

const getPriceTicket = (selectedNumbers: number): number => {
  switch (selectedNumbers) {
    case 15:
      return 3;
    case 16:
      return 100;
    case 17:
      return 300;
    case 18:
      return 5000;
    case 19:
      return 15000;
    case 20:
      return 25000;

    default:
      return 0;
  }
};

const ticketNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

export const TicketCard = ({ index }: TicketCardProps) => {
  const { setTotal } = useContext(TotalContext);

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

  useEffect(() => {
    const selecteds = Object.values(selectedNumbers).filter(Boolean);
    const selectedCount = selecteds.length;
    const totalPrice = getPriceTicket(selectedCount);

    setTotal(totalPrice as number, index);
  }, [selectedNumbers]);

  return (
    <DivContainer
      display='flex'
      flexdirection='column'
      border='1px #177FE9 solid'
      width='240px'
      height='285px'
      margin='30px 0px 0px 0px'
    >
      <DivContainer
        display='flex'
        justifycontent='space-between'
        borderbottom='1px #177FE9 dotted'
        padding='15px'
      >
        <Text display='flex' color='#A7AACD' fontWeight='bold' fontSize='12px'>
          BILHETE #{index + 1}
        </Text>
        <DivContainer display='flex' gap='5px'>
          <Text
            display='flex'
            color='#A7AACD'
            fontWeight='bold'
            fontSize='12px'
          >
            Valor:
          </Text>
          <Text
            display='flex'
            fontWeight='bold'
            fontSize='12px'
            color='#17E72C'
          >
            {getPriceTicket(selectedCount).toFixed(2).replace('.', ',')}
          </Text>
        </DivContainer>
      </DivContainer>
      <Text
        display='flex'
        fontWeight='bold'
        fontSize='12px'
        color='#A7AACD'
        padding='10px 25px'
      >
        Selecionados: {selectedCount}
      </Text>
      <StyledFlexDiv
        display='grid'
        $gridTemplateColumns='repeat(5, 1fr)'
        $gap='10px'
        $margin=' 0px auto'
      >
        {ticketNumbers.map((currentNumber, index) => (
          <Button
            key={index}
            color='#FFFFFF'
            fontSize='16px'
            background={selectedNumbers[currentNumber] ? '#EA8E41' : '#313051'}
            border='none'
            borderradius='100%'
            height='30px'
            width='30px'
            alignitems='center'
            justifycontent='center'
            disabled={selectedCount >= 20 && !selectedNumbers[currentNumber]}
            onClick={() => handleSelectNumber(currentNumber)}
          >
            {index + 1}
          </Button>
        ))}
      </StyledFlexDiv>
    </DivContainer>
  );
};
