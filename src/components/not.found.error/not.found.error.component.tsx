import React from 'react';
import { FormErrors } from '../form/utils';
import { StyledNotFoundErrorMessage } from './not.found.error.styled';

export const NotFoundErrorMessage = ({
  children,
}: React.PropsWithChildren<FormErrors>) => {
  return <StyledNotFoundErrorMessage>{children}</StyledNotFoundErrorMessage>;
};
