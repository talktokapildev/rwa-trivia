"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameOptions {
    constructor() {
        //defaults
        this.playerMode = PlayerMode.Single;
        this.gameMode = GameMode.Normal;
        this.categoryIds = [];
        this.tags = [];
        this.maxQuestions = 4;
    }
}
exports.GameOptions = GameOptions;
var PlayerMode;
(function (PlayerMode) {
    PlayerMode[PlayerMode["Single"] = 0] = "Single";
    PlayerMode[PlayerMode["Opponent"] = 1] = "Opponent";
})(PlayerMode = exports.PlayerMode || (exports.PlayerMode = {}));
var OpponentType;
(function (OpponentType) {
    OpponentType[OpponentType["Computer"] = 0] = "Computer";
    OpponentType[OpponentType["Random"] = 1] = "Random";
    OpponentType[OpponentType["Friend"] = 2] = "Friend";
})(OpponentType = exports.OpponentType || (exports.OpponentType = {}));
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Normal"] = 0] = "Normal";
    GameMode[GameMode["Offline"] = 1] = "Offline";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
//# sourceMappingURL=game-options.js.map