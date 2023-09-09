export interface Card {
  id: string;
  image: string;
  cardType: string;
}

export const defaultCombatDeck: Card[] = [
  {"id": "1", "image": "Battle-Modifier-Card-Times2.png", "cardType": "x2"},
  {"id": "2", "image": "Battle-Modifier-Card-Times0.png", "cardType": "x0"},
  {"id": "3", "image": "Battle-Modifier-Card-Plus2.png", "cardType": "+2"},
  {"id": "4", "image": "Battle-Modifier-Card-Plus1.png", "cardType": "+1"},
  {"id": "5", "image": "Battle-Modifier-Card-Plus1.png", "cardType": "+1"},
  {"id": "6", "image": "Battle-Modifier-Card-Plus1.png", "cardType": "+1"},
  {"id": "7", "image": "Battle-Modifier-Card-Plus1.png", "cardType": "+1"},
  {"id": "8", "image": "Battle-Modifier-Card-Plus1.png", "cardType": "+1"},
  {"id": "9", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "10", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "11", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "12", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "13", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "14", "image": "Battle-Modifier-Card-Plus0.png", "cardType": "+0"},
  {"id": "15", "image": "Battle-Modifier-Card-Minus1.png", "cardType": "-1"},
  {"id": "16", "image": "Battle-Modifier-Card-Minus1.png", "cardType": "-1"},
  {"id": "17", "image": "Battle-Modifier-Card-Minus1.png", "cardType": "-1"},
  {"id": "18", "image": "Battle-Modifier-Card-Minus1.png", "cardType": "-1"},
  {"id": "19", "image": "Battle-Modifier-Card-Minus1.png", "cardType": "-1"},
  {"id": "20", "image": "Battle-Modifier-Card-Minus2.png", "cardType": "-2"}
]

export const scoundrelExtraCards: Card[] = [
  {"id": "21", "image": "Scoundrel-Card-Plus2.png", "cardType": "+2"},
  {"id": "22", "image": "Scoundrel-Card-Plus1.png", "cardType": "+1"},
  {"id": "23", "image": "Scoundrel-Card-Plus1.png", "cardType": "+1"},
  {"id": "24", "image": "Scoundrel-Card-Plus0.png", "cardType": "+0"},
  {"id": "25", "image": "Scoundrel-Card-Plus0.png", "cardType": "+0"},
  {"id": "26", "image": "Scoundrel-Card-Minus1.png", "cardType": "-1"},
  {"id": "27", "image": "Scoundrel-Card-Minus1.png", "cardType": "-1"},
  {"id": "28", "image": "Scoundrel-Card-ExtraEffect.png", "cardType": "effect"},
  {"id": "29", "image": "Scoundrel-Card-ExtraEffect.png", "cardType": "effect"},
  {"id": "30", "image": "Scoundrel-Card-Special.png", "cardType": "special"}
]
