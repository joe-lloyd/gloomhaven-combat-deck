// App.tsx
import React from 'react';
import './App.css';
import { Deck } from "./Deck";
import { TopBar } from "./TopBar";
import { ShuffleProvider } from "./contexts/ShuffleContext";
import { DrawProvider } from "./contexts/DrawContext";

function App() {
  return (
    <main>
      <DrawProvider>
        <ShuffleProvider>
          <TopBar />
          <Deck />
        </ShuffleProvider>
      </DrawProvider>
    </main>
  );
}

export default App;
