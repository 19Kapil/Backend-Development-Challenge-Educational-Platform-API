const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    instructorName: { type: String, required: true },
    language: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
