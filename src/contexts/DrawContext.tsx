// DrawContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface DrawContextProps {
  isDrawing: boolean;
  triggerDraw: () => void;
}

export const DrawContext = createContext<DrawContextProps>({ isDrawing: false, triggerDraw: () => {} });

interface DrawProviderProps {
  children: ReactNode;
}

export const DrawProvider: React.FC<DrawProviderProps> = ({ children }) => {
  const [isDrawing, setDrawing] = useState(false);

  const triggerDraw = () => {
    setDrawing(true);
    setTimeout(() => setDrawing(false), 1500);
  };

  return (
    <DrawContext.Provider value={{ isDrawing, triggerDraw }}>
      {children}
    </DrawContext.Provider>
  );
};
