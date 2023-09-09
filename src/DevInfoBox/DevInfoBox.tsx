import React, {useContext} from "react";
import {DeckContext} from "../contexts/DeckContext";
import "./DevInfoBox.css";
import {Card} from "../contexts/deckOfCards";

const DevInfoBox: React.FC = () => {
  const {isDrawing, isShuffling, deck, deadPile, classDeck} = useContext(DeckContext);

  return (
    <div className="dev-info-box">
      <h4>Deck State</h4>
      <p>Total Cards: {deck.length}</p>
      <p>Is Drawing: {isDrawing ? "Yes" : "No"}</p>
      <p>Is Shuffling: {isShuffling ? "Yes" : "No"}</p>
      <div className="dev-info-tables">
        <CardTable title="Deck Table" cards={deck} />
        <CardTable title="Dead Card Pile" cards={deadPile} />
        <CardTable title="Class Deck" cards={classDeck} />
      </div>
    </div>
  );
};

interface CardTableProps {
  title: string;
  cards: Card[];
}

const CardTable: React.FC<CardTableProps> = ({ title, cards }) => {
  return (
    <div className="dev-info-table-wrapper">
      <h4>{title}</h4>
      <table className="dev-info-table">
        <thead>
        <tr>
          <th>Card Index</th>
          <th>ID</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {cards.map((card, index) => (
          <tr key={card.id}>
            <td>{index + 1}</td>
            <td>{card.id}</td>
            <td>{card.cardType}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevInfoBox;
