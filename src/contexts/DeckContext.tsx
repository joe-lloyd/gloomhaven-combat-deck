import React, { createContext, ReactNode, useState } from 'react';
import defaultDeck from './deck-of-cards.json';

interface Card {
  id: string;
  image: string;
}

interface DeckContextProps {
  deck: Card[];
  discardPile: Card[];
  drawnCard: Card | null;
  isShuffling: boolean;
  isDrawing: boolean;
  shuffle: () => void;
  draw: () => void;
}

const defaultDeckContextProps: DeckContextProps = {
  deck: [],
  discardPile: [],
  drawnCard: null,
  isShuffling: false,
  isDrawing: false,
  shuffle: () => {},
  draw: () => {},
}

export const DeckContext = createContext<DeckContextProps>(defaultDeckContextProps);

interface DeckProviderProps {
  children: ReactNode;
}

export const DeckProvider = ({ children }: DeckProviderProps) => {
  const [deck, setDeck] = useState<Card[]>(defaultDeck); // Initialize with the default deck
  const [discardPile, setDiscardPile] = useState<Card[]>([]); // Initialize with the default deck
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const shuffle = () => {
    if (isShuffling || isDrawing) return;

    setIsShuffling(true);
    setTimeout(() => {
      const newDeck = [...deck];
      newDeck.sort(() => Math.random() - 0.5);
      setDeck(newDeck);
      setIsShuffling(false);
    }, 800);
  };

  const draw = () => {
    if (isDrawing || isShuffling) return;
    if (deck.length === 0) {
      alert("The deck is empty!");
      return;
    }

    setIsDrawing(true);
    setTimeout(() => {
      const newDeck = [...deck];
      const card = newDeck.pop();
      setDiscardPile(prevDiscardPile => card ? [...prevDiscardPile, card] : prevDiscardPile);

      setDrawnCard(card || null);

      // Update deck after a delay so that there's no flickering
      setTimeout(() => {
        setDeck(newDeck);
        setIsDrawing(false);
      }, 500);

    }, 2500);
  };

  return (
    <DeckContext.Provider value={{ deck, discardPile, drawnCard, isShuffling, isDrawing, shuffle, draw }}>
      {children}
    </DeckContext.Provider>
  );
};
