import { Link } from 'react-router-dom';
import {
  Header,
  ProfileInfoCards,
  SubTitle,
  ProfileTickets,
  DivContainer,
} from '../../components';
import { StyledProfileContainer, StyledSection } from './profile.styled';
import { TicketsContextProvider } from '../../context/context';

export const ProfileTemplate = () => {
  return (
    <TicketsContextProvider>
      <StyledProfileContainer>
        <Header />
        <StyledSection>
          <Link
            style={{ color: '#707293', textDecoration: 'none' }}
            to='/profile'
          >
            {'< VOLTAR'}
          </Link>

          <DivContainer
            display='flex'
            alignitems='center'
            padding='43px 0px'
            color='#ffffff'
            fontSize='32px'
            fontWeight='bold'
          >
            <SubTitle weight='normal' subtitle='Perfil' />
          </DivContainer>
          <ProfileInfoCards />
          <ProfileTickets />
        </StyledSection>
      </StyledProfileContainer>
    </TicketsContextProvider>
  );
};
