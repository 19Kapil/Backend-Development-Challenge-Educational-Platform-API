const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    course: { type: mongoose.Schema.Types.String, ref: 'title', required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    dateTaken: { type: Date, default: Date.now },
});

const QuizResult = mongoose.model('QuizResult', QuizResultSchema);

module.exports = QuizResult;
