import React, { useContext } from 'react';
import { Card } from "../Card";
import './Deck.css';
import { DeckContext } from "../contexts/DeckContext";

const Deck: React.FC = () => {
  const { isDrawing, isShuffling, deck } = useContext(DeckContext);

  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed("Deck State");
    console.log(`Total Cards: ${deck.length}`);
    console.log(`Is Drawing: ${isDrawing}`);
    console.log(`Is Shuffling: ${isShuffling}`);
    deck.forEach((card, index) => {
      console.log(`Card ${index + 1}: ID=${card.id}, Type=${card.cardType}`);
    });
    console.groupEnd();
  }

  return (
    <div className="deck">
      {deck.map((card, index) => (
        <div key={card.id} className={isShuffling ? 'shuffle' : ''}>
          <Card
            frontImage={card.image}
            drawAnimationTrigger={index === deck.length - 1 && isDrawing}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Deck;
