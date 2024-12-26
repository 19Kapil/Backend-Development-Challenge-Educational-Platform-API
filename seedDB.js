const mongoose = require('mongoose');
const Course = require('./models/course');

const seedCourses = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const courses = [
            {
                title: "React Basics",
                description: "Learn the basics of React.js.",
                duration: 12,
                instructorName: "Sarah Connor",
                language: "English",
                level: "Intermediate",
                price: 120,
                status: "published",
                visibility: "public",
            },
            {
                title: "Node.js Advanced",
                description: "Master backend development with Node.js.",
                duration: 25,
                instructorName: "Alan Turing",
                language: "English",
                level: "Advanced",
                price: 200,
                status: "draft",
                visibility: "private",
            },
        ];

        await Course.insertMany(courses);
        console.log('Courses seeded successfully');
        process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

seedCourses();
