const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');
const quizRoutes = require('./routes/quizRoutes');
const quizeResultRoutes = require('./routes/quizeResultRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/task', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));



// Use the course routes
app.use(courseRoutes); 
app.use(quizRoutes);
app.use(quizeResultRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
