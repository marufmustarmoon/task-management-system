# Simple Task Management Tool

## Overview

The Simple Task Management Tool is designed to empower users to efficiently create and manage tasks within a streamlined interface. This project showcases proficiency in Node.js, React.js, and Redux, focusing on developing a robust application that meets user needs and adheres to best coding practices.

## Features

- User registration and authentication
- Create, update, and delete tasks
- View tasks with different statuses (Open, In-progress, Completed)
- User-friendly interface built with React
- State management using Redux
- Dockerized application for easy deployment

## Technologies Used

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React.js, Redux
- **Docker**: Docker for containerization



## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Set up the backend:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Set up the frontend:**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Docker Setup:**
   - Make sure Docker is installed and running on your machine.
   - Build and run the application using Docker Compose:
     ```bash
     cd ..
     docker-compose up --build
     ```

## Usage

- The backend API will be available at `http://localhost:5000`.
- The frontend application will be available at `http://localhost:5173`.


## Swagger API Documentation for backend

- just run the backend project and documentation will be available at http://localhost:5000/api-docs

### API Endpoints

- **User Registration**: `POST /api/auth/register`
- **User Login**: `POST /api/auth/login`
- **Create Task**: `POST /api/tasks`
- **Get Tasks**: `GET /api/tasks`
- **Update Task**: `PUT /api/tasks/:id`
- **Delete Task**: `DELETE /api/tasks/:id`


### Deployment

- I have not depoyed the project yet. but after submission i will deploy the project and give the link here





## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

