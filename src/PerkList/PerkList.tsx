import React, {useState} from 'react';
import './PerkList.css';
import {usePerkToggle} from "./usePerkToggle";

const perks = [
  {description: 'Remove two -1 cards', count: 1},
  {description: 'Remove four +0 cards', count: 1},
  {description: 'Replace one -2 card with one +0 card', count: 1},
  {description: 'Add two +1 cards', count: 2},
  {description: 'Add two +1 cards with Poison effect', count: 1},
  {description: 'Add two +1 cards with Wound effect', count: 1},
  {description: 'Add two +1 cards with Muddle effect', count: 1},
  {description: 'Add one +3 card', count: 1},
  {description: 'Add two rolling +1 cards', count: 2},
  {description: 'Add two rolling Pierce 3 cards', count: 1},
  {description: 'Add two rolling Poison cards', count: 1},
  {description: 'Add two rolling Muddle cards', count: 1},
  {description: 'Add one rolling Stun card', count: 1},
  {description: 'Add one rolling +1 Add Target card', count: 1},
  {description: 'Ignore negative scenario effects and add two +1 cards', count: 1}
];

const ScoundrelPerkList: React.FC = () => {
  const {selectedPerks, togglePerk} = usePerkToggle();

  return (
    <ul className="perk-list">
      {perks.map((perk) => (
        <li key={perk.description} className="perk-list-item"
            onClick={() => togglePerk(perk.description, perk.count - 1)}>
          {Array.from({length: perk.count}, (_, index) => (
            <input
              key={index}
              type="checkbox"
              checked={selectedPerks[perk.description] ? selectedPerks[perk.description] > index : false}
              onChange={() => togglePerk(perk.description, index)}
            />
          ))}
          {perk.description}
        </li>
      ))}
    </ul>
  );
};

export default ScoundrelPerkList;
