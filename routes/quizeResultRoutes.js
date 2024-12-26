const express = require('express');
const {
    submitQuiz,
    getQuizResults
} = require('../controllers/quizResultControllers');
const router = express.Router();


router.post('/api/quizzes/:id/quizresults', submitQuiz);   //submit
router.get('/api/quizresults/:quizId', getQuizResults);   //see result

module.exports = router;