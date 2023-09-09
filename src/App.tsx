import React from 'react';
import './App.css';
import {Deck} from "./Deck";
import {TopBar} from "./TopBar";
import {DeckProvider} from "./contexts/DeckContext";
import {DiscardPile} from "./DiscardPile";
import {SidebarProvider} from "./contexts/SidebarContext";
import {Sidebar} from "./SideBar";

function App() {
  return (
    <main>
      <DeckProvider>
        <SidebarProvider>
          <TopBar/>
          <Sidebar/>
          <div className="cards-wrapper-outer">
            <div className="cards-wrapper-inner">
              <DiscardPile/>
              <Deck/>
            </div>
          </div>

        </SidebarProvider>
      </DeckProvider>
    </main>
  );
}

export default App;
