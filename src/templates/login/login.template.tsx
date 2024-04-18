import { Link } from 'react-router-dom';
import { StyledLoginTemplate } from './login.styled';
import { UserServices } from '../../services';
import { Title, SubTitle, Form } from '../../components';
import { ToastifyAdapter } from '../helpers/toast';
import { useNavigate } from 'react-router-dom';
import { RegisterProps } from '../types';

export const LoginTemplate = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: RegisterProps) => {
    const response = await UserServices.login(email, password);

    if (response.token) {
      ToastifyAdapter.toast(`Login realizado com sucesso! `, {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'dark',
        type: 'success',
      });
      localStorage.setItem('token', response.token);
      localStorage.setItem('userData', JSON.stringify(response));
      navigate('/');
    } else {
      ToastifyAdapter.toast(response.message, {
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
