import { ProfileInfoCard } from '../../components';
import { StyledProfileInfoContainer } from './profile.info.cards.styled';
import TicketIcon from '../../assets/ticket1.png';
import DinheiroIcon from '../../assets/dinheiro1.png';
import LucroIcon from '../../assets/lucro1.png';

export const ProfileInfoCards = () => {
  const cards = [
    {
      title: 'APOSTAS ATIVAS',
      description: 'ATIVAS',
      src: TicketIcon,
      primaryColor: '#7E4E3D',
      ativas: 3,
      secondaryColor: '#EA8E41',
    },
    {
      title: 'SALDO',
      description: 'R$: 50.000,00',
      src: DinheiroIcon,
      primaryColor: '#17E72C',
    },
    {
      title: 'LUCRO',
      description: 'R$: -3.000,00',
      src: LucroIcon,
      primaryColor: '#E11717',
    },
  ];

  return (
    <StyledProfileInfoContainer>
      {cards.map((card, index) => (
        <ProfileInfoCard key={index} {...card} />
      ))}
    </StyledProfileInfoContainer>
  );
};
