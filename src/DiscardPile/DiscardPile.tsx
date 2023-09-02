import React, { useState, useContext } from 'react';
import './DiscardPile.css';
import { DeckContext } from "../contexts/DeckContext";
import CardDiscarded from "../Card/CardDiscarded";

const DiscardPile: React.FC = () => {
  const { discardPile, isReturningToDeck } = useContext(DeckContext);
  const [onHoverAnimationTrigger, setOnHoverAnimationTrigger] = useState(false);
  const hasEnoughCards = discardPile.length > 1;

  return (
    <div
      className="discard-pile"
      onMouseEnter={() => setOnHoverAnimationTrigger(hasEnoughCards)}
      onMouseLeave={() => setOnHoverAnimationTrigger(false)}
      onTouchStart={() => setOnHoverAnimationTrigger(hasEnoughCards)}
      onTouchEnd={() => setOnHoverAnimationTrigger(false)}
    >
      {discardPile.map((card, index) => (
        <CardDiscarded
          key={card.id}
          frontImage={card.image}
          index={index}
          returnToDeckAnimationTrigger={isReturningToDeck}
          onHoverAnimationTrigger={onHoverAnimationTrigger}
          delay={(discardPile.length - index - 1) * 100}
          totalCards={discardPile.length}
        />
      ))}
    </div>
  );
};

export default DiscardPile;
