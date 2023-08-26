import React from 'react';
import './App.css';
import { Deck } from "./Deck";
import { TopBar } from "./TopBar";
import { DeckProvider } from "./contexts/DeckContext";
import { DiscardPile } from "./DiscardPile";

function App() {
  return (
    <main>
      <DeckProvider>
        <TopBar />
        <DiscardPile />
        <Deck />
      </DeckProvider>
    </main>
  );
}

export default App;
