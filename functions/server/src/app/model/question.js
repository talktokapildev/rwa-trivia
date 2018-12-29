"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    constructor() {
        this.id = "";
        this.answers = [new Answer(), new Answer(), new Answer(), new Answer()];
        this.ordered = false;
        this.tags = [];
        this.categories = [];
        this.categoryIds = [];
        this.published = false;
        this.status = QuestionStatus.SAVED;
    }
}
exports.Question = Question;
class Answer {
}
exports.Answer = Answer;
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus[QuestionStatus["SAVED"] = 0] = "SAVED";
    QuestionStatus[QuestionStatus["SUBMITTED"] = 1] = "SUBMITTED";
    QuestionStatus[QuestionStatus["APPROVED"] = 2] = "APPROVED";
    QuestionStatus[QuestionStatus["INACTIVE"] = 3] = "INACTIVE";
})(QuestionStatus = exports.QuestionStatus || (exports.QuestionStatus = {}));
//# sourceMappingURL=question.js.map