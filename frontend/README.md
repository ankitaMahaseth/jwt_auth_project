# MERN JWT Authentication Project

A simple full-stack authentication application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with JSON Web Token (JWT) authentication.

This project demonstrates user registration, login, password hashing, JWT token generation, protected routes, user profile management, and logout functionality.

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation and Verification
- Protected Dashboard
- Protected Backend API Routes
- User Profile Display
- Logout Functionality
- Duplicate Email Validation
- Error Handling
- React Context API for Authentication Management
- React Router for Navigation

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Context API
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

## 📁 Project Structure

```text
jwt-auth-project/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Folder

```bash
cd jwt-auth-project
```

### 3. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/jwt_auth_db

JWT_SECRET=your_long_random_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend will run at:

```text
http://localhost:5000
```

### 4. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

## 🔐 Authentication Flow

1. **Register:** User enters name, email, and password to create an account.
2. **Password Hashing:** Password is hashed using bcryptjs before saving to MongoDB.
3. **Login:** Registered user enters email and password.
4. **Credential Verification:** Backend verifies the credentials.
5. **JWT Generation:** A JWT token is generated after successful login.
6. **Token Storage:** Frontend stores the authentication token and user details.
7. **Protected Routes:** Only authenticated users can access the dashboard.
8. **Profile:** Dashboard fetches the logged-in user's details from the protected API.
9. **Logout:** Authentication data is cleared and the user is redirected to the login page.

## 🔗 API Endpoints

Base URL:

```text
http://localhost:5000/api/auth
```

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register a new user |
| POST | /login | Authenticate an existing user |
| GET | /profile | Get logged-in user profile |

### Register User

**POST** `/api/auth/register`

Request Body:

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "Admin@123"
}
```

### Login User

**POST** `/api/auth/login`

Request Body:

```json
{
"email": "admin@gmail.com",
  "password": "Admin@123"
}
```

### Get User Profile

**GET** `/api/auth/profile`

Authorization Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🧪 Testing

You can test the application using the following steps:

1. Open the application in your browser.
2. Register a new user.
3. After successful registration, navigate to the login page.
4. Login using the registered credentials.
5. Access the dashboard.
6. Verify the logged-in user's profile information.
7. Try accessing the dashboard without logging in.
8. Verify that unauthenticated users are redirected to the login page.
9. Click Logout and verify that the session is cleared.

You can also test backend API endpoints using Postman.


## 📚 Learning Outcomes

Through this project, I learned:

- Implementing JWT-based authentication in MERN applications.
- Creating RESTful APIs using Express.js.
- Managing user data using MongoDB and Mongoose.
- Hashing and comparing passwords using bcryptjs.
- Implementing authentication middleware.
- Managing global authentication state using React Context API.
- Protecting frontend routes using React Router.
- Integrating React frontend with Node.js backend using Axios.

## 👩‍💻 Author

**Ankita Mahaseth**

Full Stack MERN Developer

Skills: React.js | Node.js | Express.js | MongoDB | JavaScript

---

⭐ If you find this project useful, feel free to star the repository!

