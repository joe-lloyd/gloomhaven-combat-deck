import React, {useContext} from "react";
import {DeckContext} from "../contexts/DeckContext";
import "./DevInfoBox.css";

const DevInfoBox: React.FC = () => {
  const {isDrawing, isShuffling, deck} = useContext(DeckContext);
  return (
    <div className="dev-info-box">
      <h4>Deck State</h4>
      <p>Total Cards: {deck.length}</p>
      <p>Is Drawing: {isDrawing ? "Yes" : "No"}</p>
      <p>Is Shuffling: {isShuffling ? "Yes" : "No"}</p>
      <table className="dev-info-table">
        <thead>
        <tr>
          <th>Card Index</th>
          <th>ID</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {deck.map((card, index) => (
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
