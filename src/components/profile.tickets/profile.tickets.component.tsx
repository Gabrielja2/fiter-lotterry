import {
  AddTicket,
  Button,
  DivContainer,
  Text,
  TicketCard,
} from '../../components';
import {
  StyledNav,
  StyledSection,
  StyledHeader,
  StyledSpan,
  StyledFooterText,
} from './profile.tickets.styled';
import InfoIcon from '../../assets/info-button1.png';
import { useState } from 'react';
import { ITicket } from './utils';

export const ProfileTickets = () => {
  const [tickets, setTickets] = useState<
    {
      [key: number]: ITicket;
    }[]
  >([]);

  return (
    <StyledSection>
      <StyledHeader>
        <StyledNav $border='2px solid #104788' color='#177FE9'>
          BILHETES
          <StyledSpan>3</StyledSpan>
        </StyledNav>
        <StyledNav color='#A7AACD'>RESULTADOS</StyledNav>
      </StyledHeader>
      <DivContainer display='flex' flexwrap='wrap'>
        <DivContainer
          display='flex'
          alignitems='start'
          justifycontent='center'
          flexdirection='column'
          padding='10px 27px'
        >
          <AddTicket
            onClick={() => setTickets((oldList) => [...oldList, {}])}
          />
        </DivContainer>
        {tickets.map((ticket, index) => {
          return (
            <DivContainer
              display='flex'
              flexdirection='column'
              alignitems='start'
              justifycontent='center'
              padding='10px 27px'
              key={index}
            >
              <TicketCard {...ticket} index={index} />
            </DivContainer>
          );
        })}
      </DivContainer>
      <DivContainer
        display='flex'
        gap='5px'
        padding='5px 27px'
        alignitems='center'
      >
        <Text color='#A7AACD' fontWeight='bold' fontSize='12px'>
          {'VALOR TOTAL: '}
        </Text>
        <Text color='#177FE9' fontWeight='bold' fontSize='12px'>
          {'R$ 25.000,00'}
        </Text>
      </DivContainer>
      <DivContainer
        display='flex'
        alignitems='center'
        flexdirection='column'
        padding='20px'
      >
        <Button
          border='none'
          background='#2546F4'
          color='#ffffff'
          width='259px'
          height='65px'
          borderradius='10px'
          fontSize='18px'
          fontWeight='bold'
          transition='background-color 0.3s'
          hover='#14132d'
        >
          COMPRAR BILHETES
        </Button>
      </DivContainer>
      <DivContainer display='flex' padding='10px 27px' alignitems='center'>
        <StyledFooterText>
          <img height={'15px'} width={'15px'} src={InfoIcon}></img>
          VALORES BILHETES: 15 NÚMEROS - R$ 3,00 | 16 NÚMEROS - R$ 100,00 | 17
          NÚMEROS - R$ 300,00 | 18 NÚMEROS - R$ 5.000,00 | 19 NÚMEROS - R$
          15.000,00 | 20 NÚMEROS - R$ 25.000,00
        </StyledFooterText>
      </DivContainer>
    </StyledSection>
  );
};
