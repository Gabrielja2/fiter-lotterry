/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';

const TotalContext = createContext({
  totalPrice: 0,
  setTotal: (total: number) => {},
});

export const TotalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotal = (total: number) => {
    setTotalPrice(total);
  };
  return (
    <TotalContext.Provider value={{ totalPrice, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export default TotalContext;
