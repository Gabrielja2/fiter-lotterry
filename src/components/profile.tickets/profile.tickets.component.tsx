import { AddTicket, TicketCard } from '../../components';
import {
  StyledNav,
  StyledSection,
  StyledHeader,
  StyledSpan,
  StyledAddTicketContainer,
  StyledBuyTicketsContainer,
  StyledTicketsButton,
  StyledFooterContainer,
  StyledFooterText,
  StyledTicketContainer,
  StyledTotalContainer,
  StyledTotal,
  StyledTotalPrice,
  StyledTicketCardContainer,
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
        <StyledNav border='2px solid #104788' color='#177FE9'>
          BILHETES
          <StyledSpan>3</StyledSpan>
        </StyledNav>
        <StyledNav color='#A7AACD'>RESULTADOS</StyledNav>
      </StyledHeader>
      <StyledTicketContainer>
        <StyledAddTicketContainer>
          <AddTicket
            onClick={() => setTickets((oldList) => [...oldList, {}])}
          />
        </StyledAddTicketContainer>
        {tickets.map((ticket, index) => {
          return (
            <StyledTicketCardContainer>
              <TicketCard key={index} {...ticket} />
            </StyledTicketCardContainer>
          );
        })}
      </StyledTicketContainer>
      <StyledTotalContainer>
        <StyledTotal>{'VALOR TOTAL: '}</StyledTotal>
        <StyledTotalPrice>{'R$ 25.000,00'}</StyledTotalPrice>
      </StyledTotalContainer>
      <StyledBuyTicketsContainer>
        <StyledTicketsButton>COMPRAR BILHETES</StyledTicketsButton>
      </StyledBuyTicketsContainer>
      <StyledFooterContainer>
        <StyledFooterText>
          <img height={'15px'} width={'15px'} src={InfoIcon}></img>
          VALORES BILHETES: 15 NÚMEROS - R$ 3,00 | 16 NÚMEROS - R$ 100,00 | 17
          NÚMEROS - R$ 300,00 | 18 NÚMEROS - R$ 5.000,00 | 19 NÚMEROS - R$
          15.000,00 | 20 NÚMEROS - R$ 25.000,00
        </StyledFooterText>
      </StyledFooterContainer>
    </StyledSection>
  );
};
