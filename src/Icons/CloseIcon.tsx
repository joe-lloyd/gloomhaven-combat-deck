import React from 'react';

const CloseIcon: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Circle */}
      <circle cx="50" cy="50" r="45" stroke="var(--text-color)" strokeWidth="3" fill="none" />
      {/* Line 1 */}
      <line x1="35" y1="35" x2="65" y2="65" stroke="var(--text-color)" strokeWidth="3"/>
      {/* Line 2 */}
      <line x1="65" y1="35" x2="35" y2="65" stroke="var(--text-color)" strokeWidth="3"/>
    </svg>
  );
};

export default CloseIcon;
