import { Link } from 'react-router-dom';
import { Header, ProfileInfoCards, SubTitle } from '../../components';
import {
  StyledProfileContainer,
  StyledMain,
  StyledLinkContainer,
  StyledSubtitleContainer,
} from './profile.styled';

export const ProfileTemplate = () => {
  return (
    <StyledProfileContainer>
      <Header />
      <StyledMain>
        <StyledLinkContainer>
          <Link
            style={{ color: '#707293', textDecoration: 'none' }}
            to='/profile'
          >
            {'< VOLTAR'}
          </Link>
        </StyledLinkContainer>
        <StyledSubtitleContainer>
          <SubTitle weight='normal' subtitle='Perfil' />
        </StyledSubtitleContainer>
        <ProfileInfoCards />
      </StyledMain>
    </StyledProfileContainer>
  );
};
