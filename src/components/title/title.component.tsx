import { StyledTitleContainer, StyledTitle } from './title.styled';
import bolsaDinheiro from '../../assets/bolsa-de-dinheiro 1.png';

export const Title: React.FC = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle color='#ffffff'>FITER</StyledTitle>
      <StyledTitle color='#17e72c'>LOTTERY</StyledTitle>
      <img src={bolsaDinheiro} />
    </StyledTitleContainer>
  );
};
