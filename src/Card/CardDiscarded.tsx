import React from 'react';
import './Card.css';
import { animated, useSpring } from "react-spring";

interface CardProps {
  index: number;
  frontImage: string;
  backImage?: string;
  className?: string;
  returnToDeckAnimationTrigger: boolean;
  delay: number;
}

function CardDiscarded({ returnToDeckAnimationTrigger, delay, frontImage, backImage = "/Battle-Modifier-Card-Back.jpg", index }: CardProps) {
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
  }, [returnToDeckAnimationTrigger, slideRef, index]);

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
