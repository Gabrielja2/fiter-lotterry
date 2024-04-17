import { ProfileInfoCardProps } from './types';
import AddDinheiro from '../../assets/add-dinheiro.png';
import { DivContainer, Text } from '../../components';

export const ProfileInfoCard = (card: ProfileInfoCardProps) => {
  return (
    <DivContainer
      display='flex'
      alignItems='start'
      justifyContent='center'
      flexDirection='column'
      padding='10px'
      gap='10px'
      width='223px'
      height='115px'
      border='1px #0E0D30 solid'
      color='white'
      background='#191B3D'
      borderRadius='10px'
    >
      <Text
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='10px'
        fontSize='16px'
        fontWeight='bold'
        color='#A7AACD'
      >
        {card.title}
        <img src={card.src}></img>
      </Text>
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
    </DivContainer>
  );
};
