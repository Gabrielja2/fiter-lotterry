import { StyledTitleContainer, StyledTitle } from './title.styled';

export const Title: React.FC = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle color='#ffffff'>FITER</StyledTitle>
      <StyledTitle color='#17e72c'>LOTTERY</StyledTitle>
    </StyledTitleContainer>
  );
};
