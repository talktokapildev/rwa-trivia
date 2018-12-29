"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerQnA {
}
exports.PlayerQnA = PlayerQnA;
class Game {
    constructor(gameOptions, player1UUId, gameId, playerQnAs, gameOver) {
        //defaults
        this._gameOptions = gameOptions;
        this._playerIds = [player1UUId];
        this.gameOver = (gameOver) ? true : false;
        this.playerQnAs = [];
        if (playerQnAs) {
            let key;
            for (key of Object.keys(playerQnAs)) {
                let qna = playerQnAs[key];
                this.playerQnAs.push({
                    "playerId": qna.playerId,
                    "questionId": qna.questionId,
                    "playerAnswerId": qna.playerAnswerId,
                    "playerAnswerInSeconds": qna.playerAnswerInSeconds,
                    "answerCorrect": qna.answerCorrect
                });
            }
        }
        if (gameId)
            this._gameId = gameId;
    }
    addPlayer(playerUUId) {
        this._playerIds.push(playerUUId);
    }
    get gameOptions() {
        return this._gameOptions;
    }
    get playerIds() {
        return this._playerIds;
    }
    get gameId() {
        return this._gameId;
    }
    addPlayerQnA(playerId, questionId) {
        let playerQnA = {
            "playerId": playerId,
            "questionId": questionId
        };
        this.playerQnAs.push(playerQnA);
        return playerQnA;
    }
    updatePlayerQnA(playerId, questionId, playerAnswerId, playerAnswerInSeconds, answerCorrect) {
        let playerQnA = this.playerQnAs.find(p => p.playerId === playerId && questionId === questionId);
        playerQnA.playerAnswerId = playerAnswerId;
        playerQnA.answerCorrect = answerCorrect;
        playerQnA.playerAnswerInSeconds = playerAnswerInSeconds;
        return playerQnA;
    }
    getDbModel() {
        let dbModel = {
            "gameOptions": this.gameOptions,
            "playerIds": this.playerIds
        };
        return dbModel;
    }
    static getViewModel(dbModel) {
        //console.log(dbModel);
        let game = new Game(dbModel["gameOptions"], dbModel["playerIds"][0], dbModel["$key"], dbModel["playerQnA"], dbModel["gameOver"]);
        //console.log(game);
        return game;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map