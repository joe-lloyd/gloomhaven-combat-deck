import {useState} from "react";

export const usePerkToggle = () => {
  const [selectedPerks, setSelectedPerks] = useState<{ [key: string]: number }>({});

  const togglePerk = (perk: string, index: number): number => {
    let newCount = 0;
    setSelectedPerks((prev) => {
      const currentCount = prev[perk] || 0;

      if (currentCount === 0) {
        newCount = 1;
      } else if (currentCount === 1 && index > 0) {
        newCount = index + 1;
      } else {
        newCount = 0;
      }

      return {...prev, [perk]: newCount};
    });

    return newCount;
  };

  return { selectedPerks, togglePerk };
};
