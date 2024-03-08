import { defineStore } from "pinia";
import { createDeck } from "../features/createDeck"; 
import { createGame } from "../features/createGame";
import DeckCard from "../data/DeckCard.json";

// Fonctions de création du jeu
const { cardList } = createDeck(DeckCard);
const { newPlayer, startGame, restartGame, matchesFound, status } = createGame(cardList);

export const useGameStore = defineStore('GameStore', {
   state: () => ({
      cardList,
      newPlayer,
      startGame,
      restartGame,
      matchesFound,
      status,
   }),
   // Mutations, actions, getters, etc. peuvent être ajoutés ici
});
