# Educational Platform API

## Overview

---

## Features
1. **Course Management**
   - Create, retrieve, update, and delete courses.
   - Courses contain details such as title, description, and duration.

2. **Quiz Management**
   - Create, retrieve, update, and delete quizzes.
   - Quizzes are linked to courses and include questions, options, and answers.

---

## Technologies Used
- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB
- **API Documentation:** Postman Collection

---

## Setup Instructions

### Prerequisites
- Node.js (>= 14.x)
- NPM or Yarn
- Database setup (MongoDB)

### Steps to Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/educational-platform-api.git
   cd educational-platform-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Database Migrations (if applicable)**
   Not applicable for MongoDB.

4. **Start the Server**
   ```bash
   npm start
   ```

5. **Access API Documentation**
   Import the provided Postman collection to test endpoints.

---

## API Documentation

### Course Endpoints
- `POST /api/courses` - Create a course
- `GET /api/courses` - Retrieve all courses
- `GET /api/courses/:id` - Retrieve a specific course
- `PUT /api/courses/:id` - Update a course
- `DELETE /api/courses/:id` - Delete a course

### Quiz Endpoints
- `POST /api/courses/:id/quizzes` - Create a quiz for a course
- `GET /api/courses/:id/quizzes` - Retrieve quizzes for a course
- `GET /api/quizzes/:id` - Retrieve a specific quiz
- `PUT /api/quizzes/:id` - Update a quiz
- `DELETE /api/quizzes/:id` - Delete a quiz

### Quiz-Taking Endpoints
- `POST /api/quizzes/:id/quizresults` - Submit answers for a quiz
- `GET /api/quizeresults/:quizId` - Fetch quiz results

---

## Testing the API
1. Import the provided Postman collection: [Download Collection](https://rb.gy/ab5rpg).
2. Test the endpoints using your preferred client (Postman/Insomnia/cURL).

---


## Contact
For questions or feedback, reach out at:
- **Email:** parazulikapil777@gmail.com

