import {
  StyledCardTitle,
  StyledProfileInfoCard,
} from './profile.info.card.styled';
import { ProfileInfoCardProps } from './types';
import AddDinheiro from '../../assets/add-dinheiro.png';

export const ProfileInfoCard = (card: ProfileInfoCardProps) => {
  console.log('card', card);

  return (
    <StyledProfileInfoCard>
      <StyledCardTitle>
        {card.title}
        <img src={card.src}></img>
      </StyledCardTitle>
      <p
        style={{
          color: card.primaryColor,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '24px',
          fontWeight: card.title !== 'APOSTAS ATIVAS' ? 'bold' : 'normal',
        }}
      >
        {card.title === 'APOSTAS ATIVAS' ? (
          <span
            style={{
              color: card.secondaryColor,
            }}
          >
            {card.ativas}
          </span>
        ) : null}
        {card.description}
        {card.title === 'SALDO' ? <img src={AddDinheiro}></img> : null}
      </p>
    </StyledProfileInfoCard>
  );
};
