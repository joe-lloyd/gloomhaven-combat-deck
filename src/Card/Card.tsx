import React from 'react';
import './Card.css';
import { animated, useSpring } from "react-spring";

interface CardProps {
  index: number;
  frontImage: string;
  backImage?: string;
  className?: string;
  drawAnimationTrigger: boolean;
}

function Card({ drawAnimationTrigger, frontImage, backImage = "/Battle-Modifier-Card-Back.jpg" }: CardProps) {
  const [scaleSpring, scaleRef] = useSpring(() => ({
    from: { transform: 'scale(1) rotateY(0deg) translate(0px, 0px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)", transformOrigin: '150px 101.5px' },
  }))

  React.useEffect(() => {
    if (drawAnimationTrigger) {
      scaleRef.start({
        from: { transform: 'scale(1) rotateY(0deg) translate(0px, 0px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" , transformOrigin: '150px 101.5px'},
        to: [
          { transform: 'scale(1.05) rotateY(0deg) translate(0px, -50px)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)" , transformOrigin: '150px 51.5px'},
          { transform: 'scale(1.05) rotateY(0deg) translate(1000px, -50px)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)", transformOrigin: '1150px 51.5px'},
          { transform: 'scale(1.05) rotateY(180deg) translate(1000px, -250px)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)" , transformOrigin: '1150px -201.5px'},
          { transform: 'scale(1.05) rotateY(180deg) translate(0px, -250px)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)" , transformOrigin: '150px -201.5px'},
          { transform: 'scale(1) rotateY(180deg) translate(0px, -250px)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" , transformOrigin: '150px -201.5px'},
        ],
        config: { mass: 1, tension: 500, friction: 50 },
      })
    }
  },[drawAnimationTrigger, scaleRef]);

  return (
      <div className="card-container">
        <animated.div className="card" style={{ ...scaleSpring }}>
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

export default Card;
