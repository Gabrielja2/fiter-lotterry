import { Link } from 'react-router-dom';

export const BackLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <Link className='back-link' to={'/perfil'} {...props}>
      {children}
    </Link>
  );
};
