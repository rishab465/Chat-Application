# 💬 MERN Chat Application



## ✨ Features

- **🔐 Authentication & Authorization** - JWT-based secure authentication
- **💬 Real-time Messaging** - Instant message delivery using Socket.io
- **👥 Online User Status** - See who's online in real-time
- **🎨 Modern UI** - Beautiful interface with TailwindCSS and Daisy UI
- **🌐 Global State Management** - Efficient state management with Zustand
- **🛡️ Error Handling** - Comprehensive error handling on client and server
- **📱 Responsive Design** - Works seamlessly on all devices
- **🔒 Password Hashing** - Secure password storage with bcryptjs

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite (build tool)
- TailwindCSS
- Daisy UI
- Zustand (state management)
- React Hot Toast (notifications)
- Socket.io-client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT (jsonwebtoken)
- bcryptjs
- Cookie Parser
- dotenv

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)
- Git

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/burakorkmez/mern-chat-app.git
cd mern-chat-app
```

### 2. Install root dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:
```
PORT=5000
MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0
JWT_SECRET=your_super_secret_random_string_here_123
NODE_ENV=development
```

**Getting your MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Replace `<username>` and `<password>` with your credentials

### 4. Install dependencies for both backend and frontend
```bash
npm run build
```

### 5. Start the application

**Development mode:**
```bash
# Terminal 1: Start backend server
npm run server

# Terminal 2: Start frontend (from frontend directory)
cd frontend
npm run dev
```

**Production mode:**
```bash
npm start
```

## 📁 Project Structure

```
mern-chat-app/
├── backend/
│   ├── controllers/      # Route controllers
│   ├── db/              # Database connection
│   ├── middleware/      # Auth middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── socket/          # Socket.io configuration
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # React Context
│   │   ├── hooks/       # Custom hooks
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Utility functions
│   │   └── zustand/     # Zustand stores
│   └── package.json
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Messages
- `GET /api/messages/:id` - Get messages with a user
- `POST /api/messages/send/:id` - Send a message

## 🧑‍💻 Usage

### Sign Up
1. Click "Sign Up"
2. Enter your full name, username, password, and select your gender
3. Account will be created with a randomly generated avatar

### Login
1. Enter your username and password
2. Click "Login"

### Send Messages
1. Select a user from the sidebar
2. Type your message in the input field
3. Press Enter or click Send
4. Messages appear in real-time for both users

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure your MongoDB URI is correct in `.env`
- Check that your IP is whitelisted in MongoDB Atlas
- Verify the password is correct

### Port Already in Use
- Default port is 5000 for backend
- Change the PORT in `.env` if needed

### npm packages install fails
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Available Scripts

From root directory:
```bash
npm run server    # Start backend with nodemon
npm start         # Start backend in production
npm run build     # Install all dependencies and build frontend
```

From frontend directory:
```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 🚀 Deployment

### Deploy to Heroku or Vercel
See the original project for deployment instructions.

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

Created based on the tutorial by [Bursa Ormez](https://github.com/burakorkmez)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Happy Chatting! 💬**
