// Deck.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Card } from "../Card";
import CardData from './deck-of-cards.json';
import { ShuffleContext } from '../contexts/ShuffleContext';
import { DrawContext } from '../contexts/DrawContext';
import './Deck.css';

const Deck: React.FC = () => {
  const shuffleContext = useContext(ShuffleContext);
  const drawContext = useContext(DrawContext);

  if (!shuffleContext || !drawContext) {
    throw new Error("Deck must be used within a ShuffleProvider and DrawProvider");
  }

  const { isShuffling } = shuffleContext;
  const { isDrawing } = drawContext;

  const [deck, setDeck] = useState(CardData);

  useEffect(() => {
    if (isShuffling) {
      // const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
      // setDeck(shuffledDeck);
    }
  }, [isShuffling, deck]);

  useEffect(() => {
    if (isDrawing && deck.length > 0) {
      // const drawnDeck = [...deck];
      // drawnDeck.shift();
      // setDeck(drawnDeck);
    }
  }, [isDrawing, deck]);

  const drawCard = () => {
    // setCards(prevCards => prevCards.slice(1));
    // setIsDrawing(false);
    console.log('onAnimationEnd');
  };

  return (
    <div className="deck">
      {deck.map((card, index) => (
        <div className={isShuffling ? 'shuffle' : ''}>
          <Card
            key={card.id}
            frontImage={card.image}
            drawAnimationTrigger={index === deck.length - 1 && isDrawing}
            shuffleAnimationTrigger={isShuffling}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Deck;
