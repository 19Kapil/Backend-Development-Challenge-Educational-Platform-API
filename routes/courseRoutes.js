const express = require('express');
const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
} = require('../controllers/courseController');

const router = express.Router();


router.post('/api/courses', createCourse);            //create 
router.get('/api/courses', getAllCourses);           //read
router.get('/api/courses/:id', getCourseById);      //read
router.put('/api/courses/:id', updateCourse);      //update
router.delete('/api/courses/:id', deleteCourse);  //delete

module.exports = router;
    