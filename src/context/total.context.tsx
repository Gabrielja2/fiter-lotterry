/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';

const TotalContext = createContext({
  totalPrice: 0,
  ticketPrices: [] as number[],
  setTotal: (total: number, index: number) => {},
});

export const TotalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketPrices, setTicketPrices] = useState<number[]>([]);

  const setTotal = (total: number, index: number) => {
    const newTicketPrices = [...ticketPrices];
    newTicketPrices[index] = total;
    setTicketPrices(newTicketPrices);
    const newTotalPrice = newTicketPrices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(newTotalPrice);
  };

  return (
    <TotalContext.Provider value={{ totalPrice, ticketPrices, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export default TotalContext;
