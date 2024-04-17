import { StyledSubTitle } from './subtitle.styled';

export const SubTitle = ({
  subtitle,
  weight,
}: {
  subtitle: React.ReactNode;
  weight?: string;
}) => {
  return (
    <StyledSubTitle $weight={weight} className='subtitle'>
      {subtitle}
    </StyledSubTitle>
  );
};
