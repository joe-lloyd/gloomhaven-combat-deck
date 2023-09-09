import React from 'react';
import './PerkList.css';
import {usePerkToggle} from "./usePerkToggle";

const perks = [
  { description: 'Remove two -1 cards', count: 1, action: 'remove', amount: 2, cardType: '-1'},
  { description: 'Remove four +0 cards', count: 1, action: 'remove', amount: 4, cardType: '+0'},
  { description: 'Replace one -2 card with one +0 card', count: 1, action: 'replace', amount: 1, cardType: '-2', replaceWith: '+0'},
  { description: 'Add two +1 cards', count: 2, action: 'add', amount: 2, cardType: '+1'},
  { description: 'Add two +1 cards with Poison effect', count: 1, action: 'add', amount: 2, cardType: '+1', effect: 'Poison'},
  { description: 'Add two +1 cards with Wound effect', count: 1, action: 'add', amount: 2, cardType: '+1', effect: 'Wound'},
  { description: 'Add two +1 cards with Muddle effect', count: 1, action: 'add', amount: 2, cardType: '+1', effect: 'Muddle'},
  { description: 'Add one +3 card', count: 1, action: 'add', amount: 1, cardType: '+3'},
  { description: 'Add two rolling +1 cards', count: 2, action: 'add', amount: 2, cardType: '+1', rolling: true},
  { description: 'Add two rolling Pierce 3 cards', count: 1, action: 'add', amount: 2, cardType: 'Pierce 3', rolling: true},
  { description: 'Add two rolling Poison cards', count: 1, action: 'add', amount: 2, cardType: 'Poison', rolling: true},
  { description: 'Add two rolling Muddle cards', count: 1, action: 'add', amount: 2, cardType: 'Muddle', rolling: true},
  { description: 'Add one rolling Stun card', count: 1, action: 'add', amount: 1, cardType: 'Stun', rolling: true},
  { description: 'Add one rolling +1 Add Target card', count: 1, action: 'add', amount: 1, cardType: '+1', effect: 'Add Target', rolling: true},
  { description: 'Ignore negative scenario effects and add two +1 cards', count: 1, action: 'add', amount: 2, cardType: '+1', ignoreScenarioEffects: true }
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
