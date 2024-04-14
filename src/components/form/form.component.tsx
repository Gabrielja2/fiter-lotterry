import React, { useState, ChangeEvent } from 'react';
import { StyledFormContainer, StyledForm } from './form.styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormProps, formSchema, FormErrors } from './utils';
import { Button, Label, Input, Error } from '../../components';

export const Form: React.FC<FormProps> = ({ fields, onSubmit, buttonName }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <StyledForm key={field.name}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            {...register(field.name as keyof z.infer<typeof formSchema>)}
            type={field.type}
            id={field.name}
            value={formData[field.name] || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, field.name)
            }
            autoComplete='on'
          />
          {errors && (
            <Error>{errors[field.name as keyof FormErrors]?.message}</Error>
          )}
        </StyledForm>
      ))}
      <Button disabled={isSubmitting} color='#0E0D30' type='submit'>
        {isSubmitting ? 'Carregando...' : buttonName}
      </Button>
    </StyledFormContainer>
  );
};
