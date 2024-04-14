import { StyledButton } from './button.styled';

export const Button = ({
  color,
  children,
  disabled,
  type,
}: {
  color: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
}) => {
  return (
    <StyledButton type={type} disabled={disabled} color={color}>
      {children}
    </StyledButton>
  );
};
