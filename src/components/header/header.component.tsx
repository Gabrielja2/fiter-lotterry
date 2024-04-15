import { Title, UserInfo } from '../../components';
import { StyledHeader } from './header.styled';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title />
      <UserInfo />
    </StyledHeader>
  );
};
