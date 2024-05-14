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

Project-Presentation Link: https://youtu.be/9zDoG3f1UNE

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

### Snapshot of Website

#### Home Page:
![Screenshot (59)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/b8fd71e3-1f2e-437d-9565-fec698f30384)


#### About Page:
![Screenshot (60)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/1ca9a888-fe9e-4919-b7c3-52ce5eecc84a)


#### Login Page:
![Screenshot (61)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/f2a42d19-0615-4b3e-a644-be8cb9fcaa58)


#### Signup Page:
![Screenshot (62)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/ea0a810a-9055-4eab-92ba-4694a995ee1e)


#### Chatbot:
![Screenshot (63)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/e214eb65-20b5-4458-a14d-5a94552d0861)


#### Dashboard Page:
![Screenshot (65)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/c208e36c-9f32-4789-9a6d-e370dae689ec)


#### Add Meal Modal:
![Screenshot (66)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/aa518ba0-f7fe-4cd8-88d0-d6708e6d53db)


#### Add Workout Modal:
![Screenshot (67)](https://github.com/SatyajeetKumarRao/Tungabhadra-Recursion-038/assets/67307315/cabd79c5-376a-44f2-a569-e912414c684c)


## Credentials

UserId : satyajeet@gmail.com

Password : user123

## API Endpoints

The deployed server can be used to fetch and sort any data. Further, it can be used to log in and register a user.

- API : https://tungabhadra-recursion-038.onrender.com
- Swagger Docs : https://tungabhadra-recursion-038.onrender.com/apiDocs

#### users:

- POST https://tungabhadra-recursion-038.onrender.com/users/register - register a new user
- POST https://tungabhadra-recursion-038.onrender.com/users/login- log in as an existing user
- POST https://tungabhadra-recursion-038.onrender.com/users/logout- logout user
- GET https://tungabhadra-recursion-038.onrender.com/users/user - retrieve user by their userId. UserId will be taken from access token.
- PATCH https://tungabhadra-recursion-038.onrender.com/users/updateProfile - update details of user

#### meals:

- GET https://tungabhadra-recursion-038.onrender.com/meals - Get meal data

- POST https://tungabhadra-recursion-038.onrender.com/meals/addMeal - Add meal data 

#### exercises:

- GET https://tungabhadra-recursion-038.onrender.com/exercises/search - Get exercise data from search

#### foods:

- GET https://tungabhadra-recursion-038.onrender.com/foods/search - Get food data from search

#### workouts:

- GET https://tungabhadra-recursion-038.onrender.com/workouts - Get workout data

- POST https://tungabhadra-recursion-038.onrender.com/workouts/addWorkout - Add workout data

#### apiDocs:

- GET https://tungabhadra-recursion-038.onrender.com/apiDocs - API Documentation (Swagger)

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Node.js
- Express.js
- MongoDB
- Chakra-ui
- Sass
- Other libraries/modules

## Contributors

- Satyajeet Kumar Rao -- ft30_292
- Praveen Kumar -- ft30_296
- Shubham -- ft30_307
