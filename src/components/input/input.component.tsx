import { InputHTMLAttributes, forwardRef } from 'react';
import { StyledInput } from './input.styled';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = 'text', ...rest }, ref) => {
    return <StyledInput {...rest} type={type} name={name} ref={ref} />;
  }
);
