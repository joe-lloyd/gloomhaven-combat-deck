import React from 'react';

const BurgerMenuIcon: React.FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      {/* Top bar */}
      <rect x="1" y="4" rx="2" ry="2" width="24" height="2" />
      {/* Middle bar */}
      <rect x="1" y="11" rx="2" ry="2" width="24" height="2" />
      {/* Bottom bar */}
      <rect x="1" y="18" rx="2" ry="2" width="24" height="2" />
    </svg>
  );
};

export default BurgerMenuIcon;
