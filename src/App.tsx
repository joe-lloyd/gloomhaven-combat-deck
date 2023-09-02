import React from 'react';
import './App.css';
import {Deck} from "./Deck";
import {TopBar} from "./TopBar";
import {DeckProvider} from "./contexts/DeckContext";
import {DiscardPile} from "./DiscardPile";

function App() {
  return (
    <main>
      <DeckProvider>
        <TopBar/>
        <div className="cards-wrapper-outer">
          <div className="cards-wrapper-inner">
            <DiscardPile/>
            <Deck/>
          </div>
        </div>
      </DeckProvider>
    </main>
  );
}

export default App;
