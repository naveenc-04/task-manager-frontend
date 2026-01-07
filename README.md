# TaskFlow – Task Manager (Frontend)

This repository contains the **frontend** of the TaskFlow Task Manager application.  
It is built using **React (Vite)** and **Tailwind CSS** and communicates with a deployed backend via REST APIs.

The application allows users to create, view, and delete tasks in real time without page reloads.


## 🚀 Features

- Add new tasks with priority
- View all tasks fetched from backend API
- Delete tasks
- Display task status (default: Pending)
- Responsive and clean UI
- No page refresh (React state-based updates)

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
- Fetch API

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/naveenc-04/task-manager-frontend.git
cd task-manager-frontend

--

Install dependencies:

npm install


Create a .env file in the root directory:

VITE_API_URL=https://task-manager-backend-r94r.onrender.com


Run the development server:

npm run dev

🔗 Backend Repository

The backend for this project is maintained separately and deployed on Render:

👉https://github.com/naveenc-04/task-manager-backend