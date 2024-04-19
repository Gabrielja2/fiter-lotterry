/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from 'react';
import { ITicketsList } from '@/components/profile.tickets/utils';
import { ITicket } from '../components/profile.tickets/utils/interfaces';

type TicketsContextType = {
  totalPrice: number;
  ticketPrices: number[];
  allTickets: ITicketsList;
  setTickets: (tickets: ITicket) => void;
};

const TicketsContext = createContext<TicketsContextType>({
  totalPrice: 0,
  ticketPrices: [],

  allTickets: [],
  setTickets: (tickets: ITicket) => {},
});

export const TicketsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // TODO: verificar se vai precisar desse estado
  const [ticketPrices, setTicketPrices] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allTickets, setAllTickets] = useState<ITicket[]>([] as ITicket[]);

  const setTickets = (currentTicket: ITicket) => {
    const filteredArray = allTickets.filter(
      (item) => item.ticketId !== currentTicket.ticketId
    );
    const newAllTickets = [...filteredArray, currentTicket];
    setAllTickets(newAllTickets);
    console.log({ newAllTickets, filteredArray });

    const total = newAllTickets.reduce(
      (total, current) => total + current.price,
      0
    );
    setTotalPrice(total);
  };

  return (
    <TicketsContext.Provider
      value={{
        totalPrice,
        ticketPrices,
        allTickets,
        setTickets,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};

export default TicketsContext;

export const useTicketsContext = () => useContext(TicketsContext);
