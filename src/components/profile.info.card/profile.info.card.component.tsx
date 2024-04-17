import { ProfileInfoCardProps } from './types';
import AddDinheiro from '../../assets/add-dinheiro.png';
import { DivContainer, Text } from '../../components';

export const ProfileInfoCard = (card: ProfileInfoCardProps) => {
  return (
    <DivContainer
      display='flex'
      alignitems='start'
      justifycontent='center'
      flexdirection='column'
      padding='10px'
      gap='10px'
      width='223px'
      height='115px'
      border='1px #0E0D30 solid'
      color='white'
      background='#191B3D'
      borderradius='10px'
    >
      <Text
        display='flex'
        alignitems='center'
        justifycontent='center'
        gap='10px'
        fontSize='16px'
        fontWeight='bold'
        color='#A7AACD'
      >
        {card.title}
        <img src={card.src}></img>
      </Text>
      <Text
        display='flex'
        gap='10px'
        color={card.primaryColor}
        fontSize='24px'
        fontWeight={card.title !== 'APOSTAS ATIVAS' ? 'bold' : 'normal'}
        alignitems='center'
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
      </Text>
    </DivContainer>
  );
};
