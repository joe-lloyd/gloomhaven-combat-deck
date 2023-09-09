import React, {createContext, ReactNode, useState} from 'react';
import {Card, defaultCombatDeck, scoundrelExtraCards} from './deckOfCards';

export interface Perk {
  description: string;
  count: number;
  action: 'remove' | 'add' | 'replace';
  amount: number;
  cardType: string;
  replaceWith?: string;
  effect?: string;
  rolling?: boolean;
  ignoreScenarioEffects?: boolean;
}

interface DeckContextProps {
  deck: Card[];
  discardPile: Card[];
  deadPile: Card[];
  classDeck: Card[];
  drawnCard: Card | null;
  isShuffling: boolean;
  isDrawing: boolean;
  isReturningToDeck: boolean;
  shuffle: () => void;
  draw: () => void;
  applyPerk: (perk: Perk) => void;
  removePerk: (perk: Perk) => void;
}

const defaultDeckContextProps: DeckContextProps = {
  deck: [],
  discardPile: [],
  classDeck: [],
  deadPile: [],
  drawnCard: null,
  isShuffling: false,
  isDrawing: false,
  isReturningToDeck: false,
  shuffle: () => {
  },
  draw: () => {
  },
  applyPerk: () => {
  },
  removePerk: () => {
  },
}

export const DeckContext = createContext<DeckContextProps>(defaultDeckContextProps);

interface DeckProviderProps {
  children: ReactNode;
}

const moveCards = (
  [fromDeck, setFromDeck]: [Card[], React.Dispatch<React.SetStateAction<Card[]>>],
  [toDeck, setToDeck]: [Card[], React.Dispatch<React.SetStateAction<Card[]>>],
  perk: Perk
) => {
  const cardsToMove = fromDeck.filter(card => card.cardType === perk.cardType).slice(0, perk.amount);

  const newFromDeck = fromDeck.filter(card => !cardsToMove.includes(card));
  const newToDeck = [...toDeck, ...cardsToMove];

  setFromDeck(newFromDeck);
  setToDeck(newToDeck);
};

export const DeckProvider = ({children}: DeckProviderProps) => {
  const [deck, setDeck] = useState<Card[]>(defaultCombatDeck); // Initialize with the default deck
  const [classDeck, setClassDeck] = useState<Card[]>(scoundrelExtraCards); // Initialize with the default deck
  const [discardPile, setDiscardPile] = useState<Card[]>([]);
  const [deadPile, setDeadPile] = useState<Card[]>([]);
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isReturningToDeck, setIsReturningToDeck] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [appliedPerks, setAppliedPerks] = useState<Perk[]>([]); // Initialize with no perks

  const applyPerk = (perk: Perk) => {
    setAppliedPerks([...appliedPerks, perk]);
    modifyDeckWithPerk(perk);
  };

  const removePerk = (perk: Perk) => {
    setAppliedPerks([...appliedPerks, perk]);
    undoModifyDeckWithPerk(perk);
  };

  const modifyDeckWithPerk = (perk: Perk): void => {
    switch (perk.action) {
      case 'remove':
        moveCards([deck, setDeck], [deadPile, setDeadPile], perk);
        return;

      case 'add':
        moveCards([classDeck, setClassDeck], [deck, setDeck], perk);
        return;

      case 'replace':
        moveCards([deck, setDeck], [deadPile, setDeadPile], perk);
        moveCards([classDeck, setClassDeck], [deck, setDeck], perk);
        return;

      default:
        return;
    }
  };
  const undoModifyDeckWithPerk = (perk: Perk): void => {
    switch (perk.action) {
      case 'remove':
        moveCards([deadPile, setDeadPile], [deck, setDeck], perk);
        return;

      case 'add':
        moveCards([deck, setDeck], [classDeck, setClassDeck], perk);
        return;

      case 'replace':
        moveCards([deadPile, setDeadPile], [deck, setDeck], perk);
        moveCards([deck, setDeck], [classDeck, setClassDeck], perk);
        return;

      default:
        return;
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
    <DeckContext.Provider value={{
      deck,
      discardPile,
      drawnCard,
      isShuffling,
      isDrawing,
      isReturningToDeck,
      shuffle,
      draw,
      applyPerk,
      removePerk,
      classDeck,
      deadPile,
    }}>
      {children}
    </DeckContext.Provider>
  );
};
