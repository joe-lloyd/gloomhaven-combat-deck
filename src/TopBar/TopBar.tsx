import React, { useContext } from 'react';
import './TopBar.css';
import { DeckContext } from "../contexts/DeckContext";

const TopBar: React.FC = () => {
  const { isShuffling, isDrawing, shuffle, draw } = useContext(DeckContext);

  return (
    <div className="top-bar">
      <button className="shuffle-btn"
              onClick={shuffle}
              disabled={isShuffling || isDrawing}
      >
        Shuffle
      </button>
      <button className="draw-btn"
              onClick={draw}
              disabled={isShuffling || isDrawing}
      >
        Draw
      </button>
    </div>
  );
};

export default TopBar;
