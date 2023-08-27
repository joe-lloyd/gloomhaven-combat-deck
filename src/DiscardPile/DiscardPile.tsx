import React, { useContext } from 'react';
import './DiscardPile.css';
import { DeckContext } from "../contexts/DeckContext";
import CardDiscarded from "../Card/CardDiscarded";

const DiscardPile: React.FC = () => {
  const { discardPile, isReturningToDeck  } = useContext(DeckContext);
  
  console.log("isReturningToDeck: ", isReturningToDeck);

  return (
    <div className="discard-pile">
      {discardPile.map((card, index) => (
        <div>
          <CardDiscarded
            key={card.id}
            frontImage={card.image}
            index={index}
            returnToDeckAnimationTrigger={isReturningToDeck}
          />
        </div>
      ))}
    </div>
  );
};

export default DiscardPile;
