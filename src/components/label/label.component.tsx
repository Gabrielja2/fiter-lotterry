import { StyledLabel } from './label.styled';

export const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
