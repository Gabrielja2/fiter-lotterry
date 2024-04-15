import {
  StyledNav,
  StyledSection,
  StyledHeader,
} from './profile.tickets.styled';

export const ProfileTickets = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledNav borderBottom='2px solid #104788' color='#177FE9'>
          BILHETES
          <span
            style={{
              color: '#ffffff',
              backgroundColor: '#177FE9',
              borderRadius: '45%',
              padding: '3px 9px',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            3
          </span>
        </StyledNav>
        <StyledNav color='#A7AACD'>RESULTADOS</StyledNav>
      </StyledHeader>
    </StyledSection>
  );
};
