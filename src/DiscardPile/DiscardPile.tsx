import React, { useContext } from 'react';
import { Card } from "../Card";
import './DiscardPile.css';
import { DeckContext } from "../contexts/DeckContext";

const DiscardPile: React.FC = () => {
  const { discardPile } = useContext(DeckContext);

  return (
    <div className="discard-pile">
      {discardPile.map((card, index) => (
        <div>
          <Card
            key={card.id}
            frontImage={card.image}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default DiscardPile;
