// TopBar.tsx
import React, { useContext } from 'react';
import { ShuffleContext } from '../contexts/ShuffleContext';
import './TopBar.css';
import { DrawContext } from "../contexts/DrawContext";

const TopBar: React.FC = () => {
  const shuffleContext = useContext(ShuffleContext);
  const drawContext = useContext(DrawContext);

  if (!shuffleContext) {
    throw new Error("TopBar must be used within a ShuffleProvider");
  }
  if (!drawContext) {
    throw new Error("TopBar must be used within a DrawProvider");
  }

  const { shuffle, isShuffling } = shuffleContext;
  const { triggerDraw, isDrawing } = drawContext;

  return (
    <div className="top-bar">
      <button className="shuffle-btn"
              onClick={shuffle}
              disabled={isShuffling || isDrawing}
      >
        Shuffle
      </button>
      <button className="draw-btn"
              onClick={triggerDraw}
              disabled={isShuffling || isDrawing}
      >
        Draw
      </button>
    </div>
  );
};

export default TopBar;
