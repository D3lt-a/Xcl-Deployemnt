# 📝 Blog API with Node.js, Express & MongoDB

This is a simple RESTful **Blog API** built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose ODM**. It allows users to **create**, **read**, and **delete** blog posts.

This project was created as part of a backend application assessment to demonstrate understanding of backend management, API development, database integration, and deployment using **manual** and **Docker-based** methods.

---

## 📌 Project Features

* RESTful API endpoints
* MongoDB database integration using Mongoose
* Manual deployment with PM2
* Dockerized deployment for portability
* API tested with Postman

---

## 📁 Project Structure

```
nodejs-blog/
├── controllers/
│   └── blogController.js
├── models/
│   └── blog.js
├── routes/
│   └── blogRoutes.js
├── .env
├── app.js
├── Dockerfile
├── README.md
└── package.json
```

---

## 🧱 Technologies Used

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Docker
* PM2
* Postman

---

## 🚀 Getting Started (Development Setup)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nodejs-blog-api.git
cd nodejs-blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file and add:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blogdb?retryWrites=true&w=majority
```

### 4. Run the server

```bash
npm run dev
```

---

## 🧪 API Endpoints

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/blogs`     | Fetch all blog posts     |
| POST   | `/api/blogs`     | Create a new blog post   |
| DELETE | `/api/blogs/:id` | Delete a blog post by ID |

---

## 🐳 Docker Deployment

### 1. Dockerfile

The Dockerfile is configured to:

* Use Node.js v18
* Copy source code
* Install dependencies
* Expose port 3000
* Start the application using npm

### 2. Build and run

```bash
docker build -t blog-api .
docker run -d -p 3000:3000 -e MONGO_URI="<your_mongo_uri>" blog-api
```

### 3. Test

Go to `http://localhost:3000/api/blogs` or use Postman to interact with the API.

### 4. Stop the container

```bash
docker stop blog-api
docker rm blog-api
```

---

## 🔧 Manual Deployment (Simulated on Local Machine)

### 1. Create Deployment Directory

```bash
mkdir C:\var\www\blog-api
xcopy /E /I C:\Users\YourName\nodejs-blog C:\var\www\blog-api
cd C:\var\www\blog-api
```

### 2. Install Dependencies

```bash
npm install --omit=dev
```

### 3. Start App with PM2

```bash
npm install -g pm2
pm2 start app.js
pm2 save
pm2 startup
```

### 4. Test Locally

Use Postman or browser to check:

```
http://localhost:3000/api/blogs
```

---

## 🧪 Testing with Postman

* Use the Postman extension to test the API.
* Send:

  * `GET` to `/api/blogs`
  * `POST` to `/api/blogs` with JSON body
  * `DELETE` to `/api/blogs/:id`

---

## 🛡️ Maintenance Plan

* Use PM2 to keep the server running
* Log with Morgan/Winston (optional)
* Secure credentials with .env
* Perform weekly DB backups
* Monitor with tools like PM2 logs or Docker logs
* Update dependencies monthly