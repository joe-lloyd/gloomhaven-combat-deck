import React from 'react';
import './Card.css';
import { animated, useSpring } from "react-spring";

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
      console.log('returnToDeckAnimationTrigger: ', returnToDeckAnimationTrigger);
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
    if (onHoverAnimationTrigger && (index === totalCards - 1 || index === totalCards - 2)) {
      const xOffset = index === totalCards - 1 ? 150 : -150;
      slideRef.start({
        from: { transform: 'rotateY(180deg) scale(1) translate(0px, 0px)' },
        to: { transform: `rotateY(180deg) scale(0.5) translate(${xOffset}px, 0px)` },
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
