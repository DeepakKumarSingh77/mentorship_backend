# Mentorship Backend
A backend API for a mentorship platform where:

- Parents create and manage student accounts
- Mentors create lessons
- Parents can book lessons for students
- Lessons contain sessions
- Text summarization is powered by Google Gemini AI

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)
- Google Gemini API

## Features

- User authentication (parents and mentors)
- Student management
- Lesson creation and booking
- Session management
- Text summarization using Google Gemini AI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google Gemini API key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mentorship-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```
This starts the server normally.

The server will run on `http://localhost:5000` (or the port specified in your `.env` file).

## API Documentation

### Authentication

#### POST /auth/signup
Create a new user account.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "parent" | "mentor"
}
```

**Response:**
```json
{
  "message": "User created",
  "user": {
    "_id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

#### POST /auth/login
Authenticate a user and get a JWT token.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

#### GET /auth/me
Get current authenticated user information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "role": "string"
}
```

### Students

#### POST /students
Create a new student (parent only).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "string",
  "age": number
}
```

**Response:**
```json
{
  "_id": "string",
  "name": "string",
  "age": number,
  "parentId": "string"
}
```

#### GET /students
Get all students for the authenticated parent.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "string",
    "name": "string",
    "age": number,
    "parentId": "string"
  }
]
```

### Lessons

#### POST /lessons
Create a new lesson (mentor only).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string"
}
```

**Response:**
```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "mentorId": "string"
}
```

### Bookings

#### POST /bookings
Create a new booking (parent only).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "studentId": "string",
  "lessonId": "string"
}
```

**Response:**
```json
{
  "_id": "string",
  "studentId": "string",
  "lessonId": "string"
}
```

### Sessions

#### POST /sessions
Create a new session (mentor only).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "lessonId": "string",
  "date": "ISO date string",
  "topic": "string",
  "summary": "string (optional)"
}
```

**Response:**
```json
{
  "_id": "string",
  "lessonId": "string",
  "date": "string",
  "topic": "string",
  "summary": "string"
}
```

#### GET /sessions/lesson/:id
Get all sessions for a specific lesson.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "string",
    "lessonId": "string",
    "date": "string",
    "topic": "string",
    "summary": "string"
  }
]
```

### LLM

#### POST /llm/summarize
Summarize text using Google Gemini AI.

**Request Body:**
```json
{
  "text": "string (50-8000 characters)"
}
```

**Response:**
```json
{
  "summary": "string",
  "model": "gemini-3-flash-preview"
}
```

### Health Check

#### GET /
Check if the server is running.

**Response:**
```
Mentorship backend running
```

## Project Structure

```
backend/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── src/
    ├── controllers/       # Route handlers
    ├── models/           # Mongoose schemas
    ├── routes/           # Express routes
    ├── middleware/       # Custom middleware
    └── db/               # Database connection
```


