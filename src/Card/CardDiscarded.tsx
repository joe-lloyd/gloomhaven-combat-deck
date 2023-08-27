import React from 'react';
import './Card.css';
import { animated, useSpring } from "react-spring";

interface CardProps {
  index: number;
  frontImage: string;
  backImage?: string;
  className?: string;
  returnToDeckAnimationTrigger: boolean;
}

function CardDiscarded({ returnToDeckAnimationTrigger, frontImage, backImage = "/Battle-Modifier-Card-Back.jpg", index }: CardProps) {
  const [slideSpring, slideRef] = useSpring(() => ({
    from: { transform: 'scale(1) rotateY(180deg) translate(0px, -250px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)", transformOrigin: '150px -201.5px' },
  }));

  React.useEffect(() => {
    if (returnToDeckAnimationTrigger) {
      slideRef.start({
        from: { transform: 'scale(1) rotateY(180deg) translate(0px, -250px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)", transformOrigin: '150px -201.5px' },
        to: [
          { transform: 'scale(1) rotateY(0deg) translate(0px, 0px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)", transformOrigin: '150px 101.5px' },
        ],
        config: { mass: 1, tension: 500, friction: 50 },
        delay: index * 100,
      });
    }
  }, [returnToDeckAnimationTrigger, slideRef]);

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
