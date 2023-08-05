import React, { createContext, ReactNode, useState } from 'react';

interface ShuffleContextProps {
  isShuffling: boolean;
  shuffle: () => void;
}

export const ShuffleContext = createContext<ShuffleContextProps | undefined>(undefined);

interface ShuffleProviderProps {
  children: ReactNode;
}

export const ShuffleProvider = ({ children }: ShuffleProviderProps) => {
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = () => {
    setIsShuffling(true);
    setTimeout(() => setIsShuffling(false), 800);
  };

  return (
    <ShuffleContext.Provider value={{ isShuffling, shuffle }}>
      {children}
    </ShuffleContext.Provider>
  );
};
