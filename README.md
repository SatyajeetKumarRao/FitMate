# FitMate

## Introduction

FitMate is the ultimate fitness tracking website, designed to revolutionize how users monitor their health journey. With its intuitive interface and comprehensive features, FitMate empowers individuals to achieve their fitness goals seamlessly. From workout routines to nutritional insights, FitMate ensures a holistic approach to wellness, making it the ideal companion for anyone on their fitness journey.

## Project Type

Frontend | Backend | FullStack

## Deployed App

Frontend: https://tungabhadra-recursion-038.vercel.app

Backend: https://tungabhadra-recursion-038.onrender.com

## Directory Structure

```
├── .gitignore
├── README.md
├── backend/
│   ├── .gitignore
│   ├── controller/
│   │   └── users.controller.js
│   ├── index.js
│   ├── middleware/
│   │   └── users.middleware.js
│   ├── models/
│   │   ├── DailyLogs.model.js
│   │   ├── Exercises.model.js
│   │   ├── Foods.model.js
│   │   ├── Meals.model.js
│   │   ├── Workouts.model.js
│   │   ├── blacklistToken.model.js
│   │   └── users.model.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── exercises.routes.js
│   │   ├── food.routes.js
│   │   ├── meals.routes.js
│   │   ├── users.routes.js
│   │   └── workouts.routes.js
│   ├── swagger.json
│   ├── utils/
│   │   ├── AgeCalculator.js
│   │   ├── TdeeCalculator.js
│   │   └── db.config.js
│   └── vercel.json
└── frontend/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── banner.png
│   │   ├── image-1.avif
│   │   ├── image-2.avif
│   │   ├── image-3.avif
│   │   ├── image-4.avif
│   │   ├── image-5.avif
│   │   ├── image-6.avif
│   │   ├── logo-transparant.png
│   │   ├── logo.png
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Navbar.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── UserDashboard.jsx
│   │   ├── routes/
│   │   │   ├── AllRoutes.jsx
│   │   │   └── PrivateRoute.jsx
│   │   └── styles/
│   │   │   ├── Dashboard/
│   │   │   │   └── styles.css
│   │   │   ├── Navbar/
│   │   │   │   └── style.css
│   │   │   ├── css/
│   │   │   │   ├── style.css
│   │   │   │   ├── style.css.map
│   │   │   │   └── style.scss
│   │   │   ├── fonts/
│   │   │   │   ├── Abril_Fatface/
│   │   │   │   │   ├── AbrilFatface-Regular.ttf
│   │   │   │   │   └── OFL.txt
│   │   │   │   ├── material-design-iconic-font/
│   │   │   │   │   ├── css/
│   │   │   │   │   │   ├── material-design-iconic-font.css
│   │   │   │   │   │   └── material-design-iconic-font.min.css
│   │   │   │   │   └── fonts/
│   │   │   │   │   │   ├── Material-Design-Iconic-Font.eot
│   │   │   │   │   │   ├── Material-Design-Iconic-Font.svg
│   │   │   │   │   │   ├── Material-Design-Iconic-Font.ttf
│   │   │   │   │   │   ├── Material-Design-Iconic-Font.woff
│   │   │   │   │   │   └── Material-Design-Iconic-Font.woff2
│   │   │   │   └── muli/
│   │   │   │   │   ├── Muli-Bold.ttf
│   │   │   │   │   ├── Muli-Regular.ttf
│   │   │   │   │   └── Muli-SemiBold.ttf
│   │   │   └── images/
│   │   │   │   ├── balance.png
│   │   │   │   ├── banner.png
│   │   │   │   ├── bg-login-form.jpg
│   │   │   │   ├── bg-registration-form.jpg
│   │   │   │   ├── food.png
│   │   │   │   ├── net calories.png
│   │   │   │   └── workout.png
│   └── vite.config.js
```

## Video Walkthrough of the project

Project-Presentation Link:

## Features

- Responsive and dynamic website
- User authentication using jwt
- Password hashing
- CRUD Operations
- Search property using search param
- Private routes

## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

To run the frontend website, enter the following commands in your terminal:

```bash

# Move into the FrontEnd Directory
cd frontend/

# Install all dependencies
npm install

# Run the dev server
npm run dev

```

To run the backend server, enter the following commands in your terminal:

```bash

# Move into the BackEnd directory
cd backend/

# Install all dependencies
npm install

# Run the server
npm run start

```

## Usage




Snapshot of Website

## API Endpoints

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Node.js
- Express.js
- Chakra-ui
- Other libraries/modules

## Contributors

- Satyajeet Kumar Rao -- ft30_292
- Praveen Kumar -- ft30_296
- Shubham -- ft30_307
