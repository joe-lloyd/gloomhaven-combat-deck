import React, { createContext, ReactNode, useState } from 'react';
import {Card, defaultCombatDeck, scoundrelExtraCards} from './deckOfCards';

interface Perk {
  description: string;
  count: number;
  action: 'remove' | 'add' | 'replace';
  amount: number;
  cardType: string;
}

interface DeckContextProps {
  deck: Card[];
  discardPile: Card[];
  drawnCard: Card | null;
  isShuffling: boolean;
  isDrawing: boolean;
  isReturningToDeck: boolean;
  shuffle: () => void;
  draw: () => void;
  applyPerk: (perk: Perk) => void;
}

const defaultDeckContextProps: DeckContextProps = {
  deck: [],
  discardPile: [],
  drawnCard: null,
  isShuffling: false,
  isDrawing: false,
  isReturningToDeck: false,
  shuffle: () => {},
  draw: () => {},
  applyPerk: () => {}
}

export const DeckContext = createContext<DeckContextProps>(defaultDeckContextProps);

interface DeckProviderProps {
  children: ReactNode;
}

const removeCards = (currentDeck: Card[], perk: Perk): Card[] => {
  return currentDeck.filter((card, index, self) => {
    const cardsOfSameType = self.filter(cardItem => cardItem.cardType === perk.cardType);
    return !(card.cardType === perk.cardType && cardsOfSameType.indexOf(card) < perk.amount);
  });
};

const addCards = (currentDeck: Card[], perk: Perk, extraDeck: Card[]): Card[] => {
  const cardsToAdd = extraDeck.filter(card => card.cardType === perk.cardType).slice(0, perk.amount);
  return [...currentDeck, ...cardsToAdd];
};

export const DeckProvider = ({ children }: DeckProviderProps) => {
  const [deck, setDeck] = useState<Card[]>(defaultCombatDeck); // Initialize with the default deck
  const [discardPile, setDiscardPile] = useState<Card[]>([]); // Initialize with the default deck
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isReturningToDeck, setIsReturningToDeck] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [appliedPerks, setAppliedPerks] = useState<Perk[]>([]); // Initialize with no perks

  const applyPerk = (perk: Perk) => {
    // Logic to update deck based on perk
    setAppliedPerks([...appliedPerks, perk]);
    const newDeck = modifyDeckWithPerk(deck, perk, scoundrelExtraCards);
    setDeck(newDeck);
  };

  const modifyDeckWithPerk = (currentDeck: Card[], perk: Perk, extraDeck: Card[]): Card[] => {
    switch (perk.action) {
      case 'remove':
        return removeCards(currentDeck, perk);

      case 'add':
        return addCards(currentDeck, perk, extraDeck);

      case 'replace':
        const deckAfterRemove = removeCards(currentDeck, perk);
        return addCards(deckAfterRemove, perk, extraDeck);

      default:
        return currentDeck;
    }
  };
  const shuffle = () => {
    if (isShuffling || isDrawing || isReturningToDeck) return;
    setIsReturningToDeck(true);
    setTimeout(() => {
      setIsShuffling(true);
      setIsReturningToDeck(false);
      setTimeout(() => {
        const newDeck = [...deck, ...discardPile];
        newDeck.sort(() => Math.random() - 0.5);
        setDeck(newDeck);
        setIsShuffling(false);
        setDiscardPile([]);
      }, 800)
    }, (discardPile.length + 1) * 100);
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
    <DeckContext.Provider value={{ deck, discardPile, drawnCard, isShuffling, isDrawing, isReturningToDeck, shuffle, draw, applyPerk }}>
      {children}
    </DeckContext.Provider>
  );
};
