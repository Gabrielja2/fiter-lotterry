import { Link } from 'react-router-dom';
import { StyledRegisterTemplate } from './register.styled';
import { UserServices } from '../../services';
import { Title, SubTitle, Form } from '../../components';

export const RegisterTemplate = () => {
  const handleRegister = async (data: { [key: string]: string }) => {
    const { email, password } = data;
    return await UserServices.register(email, password);
  };

  const registerFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <StyledRegisterTemplate>
      <Title />
      <SubTitle subtitle={'Register'} />
      <Form
        fields={registerFields}
        onSubmit={handleRegister}
        buttonName='Registrar'
      />
      <span>
        Já tem uma conta?{' '}
        <Link to='/login' className='link'>
          Entrar
        </Link>
      </span>
    </StyledRegisterTemplate>
  );
};
