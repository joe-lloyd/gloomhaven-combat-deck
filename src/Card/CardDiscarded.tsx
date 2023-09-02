import React from 'react';
import './Card.css';
import { animated, useSpring } from "react-spring";
import transformOffset from "./helpers";

interface CardProps {
  index: number;
  frontImage: string;
  backImage?: string;
  className?: string;
  returnToDeckAnimationTrigger: boolean;
  onHoverAnimationTrigger: boolean;
  delay: number;
  totalCards: number;
}

function CardDiscarded({ onHoverAnimationTrigger, returnToDeckAnimationTrigger, delay, frontImage, backImage = "/Battle-Modifier-Card-Back.jpg", index, totalCards }: CardProps) {
  const [slideSpring, slideRef] = useSpring(() => ({
    from: { transform: 'rotateY(180deg) translate(0px, 0px)' },
  }));

  React.useEffect(() => {
    if (returnToDeckAnimationTrigger) {
      slideRef.start({
        from: { transform: 'rotateY(180deg) translate(0px, 0px)' },
        to: [
            { transform: 'rotateY(0deg) translate(0px, 50px)'},
            { transform: 'rotateY(0deg) translate(0px, 250px)'}
        ],
        config: { mass: 1, tension: 500, friction: 50 },
        delay,
      });
    }
  }, [returnToDeckAnimationTrigger, slideRef, index, delay]);

  React.useEffect(() => {
    const isLastCard = totalCards - 1 === index;
    const isSecondToLastCard = totalCards - 2 === index;
    if (onHoverAnimationTrigger && (isLastCard || isSecondToLastCard)) {
      const { xOffset, yOffset} = transformOffset(isLastCard);
      slideRef.start({
        from: { transform: 'rotateY(180deg) scale(1) translate(0px, 0px)' },
        to: { transform: `rotateY(180deg) scale(0.6) translate(${xOffset}px, ${yOffset}px)` },
        config: { mass: 1, tension: 500, friction: 50 },
      });
    } else {
      // Reset or skip animation for other cards
      slideRef.start({
        to: { transform: 'rotateY(180deg) scale(1) translate(0px, 0px)' },
        config: { mass: 1, tension: 500, friction: 50 },
      });
    }
  }, [onHoverAnimationTrigger, slideRef, index, totalCards]);

  return (
      <div className="card-container">
        <animated.div className="card" style={{ ...slideSpring }}>
          <div className="card-front">
            <img src={frontImage} alt="front side" className="card-image" />
          </div>

          <div className="card-back">
            <img src={backImage} alt="back side" className="card-image" />
          </div>
        </animated.div>
      </div>
  );
}

export default CardDiscarded;
