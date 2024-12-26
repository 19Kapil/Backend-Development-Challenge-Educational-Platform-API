const express = require('express');
const {
    createQuiz,
    getAllQuizes,
     getQuizById,
     updateQuiz,
    deleteQuiz,
} = require('../controllers/quizController');


const router = express.Router();


router.post('/api/courses/:id/quizzes', createQuiz);    //create
router.get('/api/courses/:id/quizzes', getAllQuizes);  //read
router.get('/api/quizzes/:id', getQuizById);          //read
router.put('/api/quizzes/:id', updateQuiz);          //update
router.delete('/api/quizzes/:id', deleteQuiz);      //delete

module.exports = router;