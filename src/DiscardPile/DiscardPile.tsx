import React, { useState, useContext } from 'react';
import { useTransition, animated } from 'react-spring';

import './DiscardPile.css';
import { DeckContext } from "../contexts/DeckContext";
import CardDiscarded from "../Card/CardDiscarded";
import TouchIcon from "../TouchIcon/TouchIcon";

const DiscardPile: React.FC = () => {
  const { discardPile, isReturningToDeck } = useContext(DeckContext);
  const [onHoverAnimationTrigger, setOnHoverAnimationTrigger] = useState(false);
  const hasEnoughCards = discardPile.length > 1;
  const isTouchDevice = 'ontouchstart' in window;
  const shouldShowIcon = discardPile.length > 1 && isTouchDevice;

  const transitions = useTransition(shouldShowIcon, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
      {transitions((style, item) =>
        item ? <animated.div style={style}><TouchIcon /></animated.div> : null
      )}
    </div>
  );
};

export default DiscardPile;
