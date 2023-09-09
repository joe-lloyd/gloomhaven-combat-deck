import {useContext, useState} from "react";
import {DeckContext} from "../contexts/DeckContext";

export const usePerkToggle = () => {
  const [selectedPerks, setSelectedPerks] = useState<{ [key: string]: number }>({});

  const togglePerk = (perk: string, index: number) => {
    setSelectedPerks((prev) => {
      const currentCount = prev[perk] || 0;
      let newCount;

      if (currentCount === 0) {
        newCount = 1;
      } else if (currentCount === 1 && index > 0) {
        newCount = index + 1;
      } else {
        newCount = 0;
      }

      return {...prev, [perk]: newCount};
    });
  };

  return { selectedPerks, togglePerk };
};
