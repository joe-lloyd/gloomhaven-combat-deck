import React from 'react';
import { useSpring, animated } from 'react-spring';

const TouchIcon = () => {
  const bounce = useSpring({
    from: { transform: 'scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.2)', config: { tension:800, friction: 20 } });
        await next({ transform: 'scale(1)', config: { tension: 800, friction: 20 } });
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    },
  });

  return (
    <animated.svg style={bounce} width="100%" height="100%" viewBox="0 0 100 100">
      {/* Outermost ring */}
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="6" fill="none" opacity="0.6" />
      {/* Middle ring */}
      <circle cx="50" cy="50" r="30" stroke="black" strokeWidth="6" fill="none" opacity="0.8" />
      {/* Innermost dot */}
      <circle cx="50" cy="50" r="10" stroke="black" strokeWidth="6" fill="black" />
    </animated.svg>
  );
};

export default TouchIcon;
