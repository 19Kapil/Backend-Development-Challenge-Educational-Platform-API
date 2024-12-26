const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: mongoose.Schema.Types.String, ref: 'title', required: true },
    questions: [
        {
            question: { type: String, required: true },
            options: { type: [String], required: true },
            correctAnswer: { type: String, required: true },
        },
    ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
