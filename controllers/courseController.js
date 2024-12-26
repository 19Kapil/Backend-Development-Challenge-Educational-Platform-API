const Course = require('../models/course');

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { title, description, duration, instructorName, language, level, price } = req.body;
        if (!title || !description || !duration || !instructorName || !language || !level || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const newCourse = new Course({
            title,
            description,
            duration,
            instructorName,
            language,
            level,
            price
        });

       
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create course', error: error.message });
    }
};

// Retrieve all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find(); 
        if (courses.length === 0) {
            return res.status(404).json({ message: 'No courses found' });
        }
        res.status(200).json(courses); 
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Retrieve a specific course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id); 
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a course by ID
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, 
        });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
