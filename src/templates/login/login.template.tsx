import { Link } from 'react-router-dom';
import { StyledLoginTemplate } from './login.styled';
import { UserServices } from '../../services';
import { Title, SubTitle, Form } from '../../components';
import { ToastifyAdapter } from '../helpers/toast';

export const LoginTemplate = () => {
  const handleLogin = async (data: { [key: string]: string }) => {
    const { email, password } = data;
    const response = await UserServices.login(email, password);

    if (typeof response === 'string') {
      ToastifyAdapter.toast(`Login realizado com sucesso! `, {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'dark',
        type: 'success',
      });
    } else {
      ToastifyAdapter.toast(`${response['message']}`, {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'dark',
        type: 'error',
      });
    }
  };

  const loginFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <>
      <StyledLoginTemplate>
        <Title />
        <SubTitle subtitle={'Login'} />
        <Form fields={loginFields} onSubmit={handleLogin} buttonName='Entrar' />
        <span>
          Você ainda não tem uma conta?{' '}
          <Link to='/register' className='link'>
            Registrar
          </Link>
        </span>
      </StyledLoginTemplate>
      {ToastifyAdapter.toastContainer()}
    </>
  );
};
