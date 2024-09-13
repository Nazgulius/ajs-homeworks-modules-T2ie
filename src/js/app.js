import defaultGame, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame 
} from "./game.js";

const game = defaultGame;

game.start();