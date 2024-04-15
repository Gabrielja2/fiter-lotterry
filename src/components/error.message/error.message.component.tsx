import React from 'react';
import { FormErrors } from '../form/utils';
import { StyledErrorMessage } from './error.message.styled';

export const ErrorMessage = ({
  children,
}: React.PropsWithChildren<FormErrors>) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};
