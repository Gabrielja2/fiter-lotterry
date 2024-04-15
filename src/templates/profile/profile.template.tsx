import { Link } from 'react-router-dom';
import {
  Header,
  ProfileInfoCards,
  SubTitle,
  ProfileTickets,
} from '../../components';
import {
  StyledProfileContainer,
  StyledSection,
  StyledSubtitleContainer,
} from './profile.styled';

export const ProfileTemplate = () => {
  return (
    <StyledProfileContainer>
      <Header />
      <StyledSection>
        <Link
          style={{ color: '#707293', textDecoration: 'none' }}
          to='/profile'
        >
          {'< VOLTAR'}
        </Link>

        <StyledSubtitleContainer>
          <SubTitle weight='normal' subtitle='Perfil' />
        </StyledSubtitleContainer>
        <ProfileInfoCards />
        <ProfileTickets />
      </StyledSection>
    </StyledProfileContainer>
  );
};
