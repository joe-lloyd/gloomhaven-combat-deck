import React, { useContext } from 'react';
import { Card } from "../Card";
import './Deck.css';
import { DeckContext } from "../contexts/DeckContext";

const Deck: React.FC = () => {
  const { isDrawing, isShuffling, deck } = useContext(DeckContext);

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
