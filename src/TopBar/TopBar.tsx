import React, {useContext} from 'react';
import './TopBar.css';
import {DeckContext} from "../contexts/DeckContext";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import { useSidebar} from "../contexts/SidebarContext";

const TopBar: React.FC = () => {
  const {isShuffling, isDrawing, shuffle, draw} = useContext(DeckContext);
  const { setIsOpen } = useSidebar();

  return (
    <div className="top-bar">
      <div>

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
      <button className="menu-btn"
              onClick={() => {
                setIsOpen(true);
              }}
      >
        <BurgerMenuIcon/>
      </button>
    </div>
  );
};

export default TopBar;
