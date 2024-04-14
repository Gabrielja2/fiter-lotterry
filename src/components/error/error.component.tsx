import React from 'react';
import { FormErrors } from '../form/utils';
import { StyledError } from './error.styled';

export const Error = ({ children }: React.PropsWithChildren<FormErrors>) => {
  return <StyledError>{children}</StyledError>;
};
