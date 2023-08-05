import React from 'react';
import './App.css';
import { Deck } from "./Deck";
import { TopBar } from "./TopBar";
import { DeckProvider } from "./contexts/DeckContext";

function App() {
  return (
    <main>
      <DeckProvider>
        <TopBar />
        <Deck />
      </DeckProvider>
    </main>
  );
}

export default App;
