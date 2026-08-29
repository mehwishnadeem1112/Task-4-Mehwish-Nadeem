# Nook — Full Stack Task Manager (Frontend + Backend Integration)

A cozy, fully responsive task management web app — built as **Project 4: Frontend & Backend Integration** for the Full Stack Development Industrial Training Kit at **DecodeLabs** (Batch 2026).

This project bridges the gap between an isolated backend API and a real, usable interface — connecting a Node.js/Express/MongoDB backend to a live, browser-based frontend using nothing but vanilla JavaScript, `fetch()`, and `async/await`.

## About the Project

Building on the CRUD API from Project 3 (Database Integration), this project adds a complete frontend that talks to that backend in real time — creating, viewing, updating, and deleting tasks directly from the browser, with proper loading states, error handling, and a warm, distraction-free design.

## Features
- Full CRUD from the UI: add, view, mark complete, and delete tasks
- Live filtering by status (All / Pending / Done)
- Dashboard stats: total, pending, and completed task counts
- Graceful error handling with retry — no blank screens on failure
- Loading and empty states for a polished user experience
- Fully responsive, single-file frontend (no build tools, no frameworks)

## Tech Stack
**Backend:** Node.js, Express, MongoDB Atlas, Mongoose
**Frontend:** HTML, CSS, vanilla JavaScript (`fetch`, `async/await`, DOM APIs)
**Tooling:** Postman (API testing), CORS (cross-origin requests)

## How It Works
1. The frontend (`index.html`) sends requests to the backend using `fetch()`
2. The backend (`server.js` + `routes/taskRoutes.js`) processes the request and queries MongoDB via Mongoose
3. The response comes back as JSON and is rendered directly into the DOM — no page reloads, no frameworks

## Setup

1. Start the backend:
   ```
   npm install
   node server.js
   ```
   You should see:
   ```
   ✅ MongoDB connected
   Server running on port 5000
   ```

2. Open `index.html` directly in your browser — no build step needed. It connects to `http://localhost:5000` by default (editable via the ⚙️ settings icon in the app).

## API Endpoints

| Method | Endpoint              | Description        |
|--------|------------------------|---------------------|
| POST   | `/tasks`               | Create a new task   |
| GET    | `/tasks`                | Get all tasks      |
| GET    | `/tasks/:id`            | Get a single task  |
| PUT    | `/tasks/:id`            | Update a task       |
| PATCH  | `/tasks/:id/complete`   | Mark a task as done |
| DELETE | `/tasks/:id`            | Delete a task       |

## Security note
`.env` is excluded via `.gitignore` — real MongoDB credentials are never committed to this repository.

---

**Built as part of the DecodeLabs Full Stack Development Industrial Training Kit — Project 4: Frontend & Backend Integration.**
