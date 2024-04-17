import React from 'react';
import { FormErrors } from '../form/utils';
import { Text } from '../text';

export const ErrorMessage = ({
  children,
}: React.PropsWithChildren<FormErrors>) => {
  return (
    <Text color='red' fontSize='12px'>
      {children}
    </Text>
  );
};
