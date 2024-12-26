const QuizResult = require('../models/quizResult');  // Import the QuizResult model
const Quiz = require('../models/quiz');

const submitQuiz = async (req, res) => {
    try {
        const { quizId, userAnswers } = req.body;
        if (!quizId || !Array.isArray(userAnswers) || userAnswers.length === 0) return res.status(400).json({ message: 'Quiz ID and answers are required' });

        const quiz = await Quiz.findById(quizId);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        const score = userAnswers.reduce((score, answer, index) => {
            if (!['A', 'B', 'C', 'D'].includes(answer)) return res.status(400).json({ message: `Invalid answer at question ${index + 1}` });
            return quiz.questions[index].correctAnswer === answer ? score + 1 : score;
        }, 0);

        const result = new QuizResult({
            quizId, course: quiz.course, score, totalQuestions: quiz.questions.length
        });

        await result.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit quiz', error: error.message });
    }
};


const getQuizResults = async (req, res) => {
    try {
        const { quizId } = req.params;
        const results = await QuizResult.find({ quizId });

        if (results.length === 0) {
            return res.status(404).json({ message: 'No results found for this quiz' });
        }

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch quiz results', error: error.message });
    }
};

module.exports = { submitQuiz , getQuizResults };