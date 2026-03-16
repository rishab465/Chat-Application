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




