# Construction Field Management App (Frontend Intern Task)

## Overview

This project is a responsive web application built using React.js for the Frontend Web Developer Intern selection task.
The application implements core screens from a Construction Field Management App including Login, Project List, and Daily Progress Report (DPR) Form.

The goal of this project is to demonstrate frontend development skills such as component structure, state management, form validation, responsive UI design, and client-side routing.

---

## Tech Stack

* React.js
* React Router v6
* Tailwind CSS
* Axios
* Vite

---

## Features

### 1. Login Screen

* Email and password authentication
* Mock login credentials:

  * Email: `test@test.com`
  * Password: `123456`
* Displays error message for invalid credentials
* Redirects to Project List on successful login

### 2. Project List Screen

* Displays a list of construction projects
* Each project shows:

  * Project Name
  * Status
  * Start Date
  * Location
* Card-based UI design
* Clicking a project opens the DPR form

### 3. Daily Progress Report (DPR) Form

Form fields include:

* Project selection dropdown
* Date picker
* Weather selection (Sunny / Cloudy / Rainy)
* Work Description textarea
* Worker count input
* Photo upload (1–3 images)
* Image preview thumbnails

Form validation ensures all required fields are filled before submission.

### 4. Responsive Design

The application is fully responsive and works across:

* Mobile devices (375px)
* Tablets (768px)
* Desktop screens (1280px+)

---

## Project Structure

src/

* components/
* pages/
* utils/
* constants/
* assets/

Key Pages:

* Login Page
* Project List Page
* DPR Form Page

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/frontend-intern-task.git
```

### 2. Navigate to project folder

```bash
cd frontend-intern-task
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm run dev
```

The app will run locally on:

```
http://localhost:5173
```

---

## Implemented Requirements

✔ Login screen with validation
✔ Mock authentication
✔ Project list with card UI
✔ Daily Progress Report form
✔ Image upload with preview
✔ Client-side routing using React Router v6
✔ Fully responsive layout

---

## Optional / Bonus Features

* Project status filtering
* Responsive UI improvements
* Clean component-based architecture

---

## Known Limitations

* Authentication is mock-based (no backend integration)
* Project data is static (hard-coded JSON)
* DPR submission does not store data permanently

---

## Author

Mansi Raju Shinde
Frontend Web Developer Internship Candidate
