import React from 'react';
import { FormErrors } from '../form/utils';
import { DivContainer, Text } from '../../components';

export const NotFoundErrorMessage = ({
  children,
}: React.PropsWithChildren<FormErrors>) => {
  return (
    <DivContainer
      display='flex'
      alignitems='center'
      justifycontent='center'
      flexdirection='column'
      width='100vw'
      height='100vh'
    >
      <Text color='red' fontSize='30px'>
        {children}
      </Text>
    </DivContainer>
  );
};
