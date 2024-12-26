const Quiz = require('../models/quiz');
const Course = require('../models/course');

// Create a quize:
const createQuiz = async (req, res) => {
    try {
        const { questions } = req.body; 

        if (!Array.isArray(questions) || questions.length === 0) 
            return res.status(400).json({ message: 'At least one question is required' });

        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        const quiz = await new Quiz({
            courseId: course._id,
            course: course.title,
            questions
        }).save();

        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create quiz', error: error.message });
    }
};
// Find quizzes by the course ID
   const getAllQuizes = async (req, res) => {
    try {
        
        const quizzes = await Quiz.find({ courseId: req.params.id });

        if (quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found for this course' });
        }

        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a specific quize by ID
const getQuizById = async (req, res) => {
    try {
        const course = await Quiz.findById(req.params.id); 
        if (!course) {
            return res.status(404).json({ message: 'Quize not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a quize by ID
const updateQuiz = async (req, res) => {
    try {
        const course = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, 
        });
        if (!course) {
            return res.status(404).json({ message: 'Quize not found' });
        }
        res.status(200).json({ message: 'Quize updated successfully', course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a quize by ID
const deleteQuiz = async (req, res) => {
    try {
        const course = await Quiz.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Quize not found' });
        }
        res.status(200).json({ message: 'Quize deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createQuiz,
    getAllQuizes,
    getQuizById,
    updateQuiz,
    deleteQuiz,
};