import { Link } from 'react-router-dom';
import { StyledApp } from './login.styled';
import { UserServices } from '../../services';
import { Form, Title, SubTitle } from '../../components';

export const LoginTemplate = () => {
  const handleLogin = async (data: { [key: string]: string }) => {
    const { email, password } = data;
    return await UserServices.login(email, password);
  };

  const loginFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <StyledApp>
      <Title />
      <SubTitle subtitle={'Login'} />
      <Form fields={loginFields} onSubmit={handleLogin} buttonName='Entrar' />
      <span>
        Você ainda não tem uma conta?{' '}
        <Link to='/register' className='link'>
          Registrar
        </Link>
      </span>
    </StyledApp>
  );
};
