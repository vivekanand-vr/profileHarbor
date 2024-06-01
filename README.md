# ProfileHarbor Documentation

## Overview

ProfileHarbor is a web application designed to collect various types of information from users and submit it to a backend server. It provides a user-friendly interface for users to input their personal information, technical skills, preferences, and upload their resume. The application ensures data integrity and security through form validation and submission to a backend server built with Spring Boot.

## Features

1. `User-friendly Interface`: ProfileHarbor provides a clean and intuitive interface for users to input their information across multiple pages.

2. `Multi-page Form`: The form is divided into multiple pages, each focusing on specific categories of information, including personal information, technical skills, preferences, and resume upload.

3. `Resume Upload`: Users can upload their resume in PDF or Word format, with a size limit of 2MB.

4. `Data Validation`: All form fields are validated using Formik and Yup, ensuring that users provide valid and complete information.

5. `Display Summary`: After filling out all the pages, users are presented with a summary of the information they provided, including the uploaded resume.

6. `Backend Integration`: Upon successful submission, the form data is sent to a backend server built with Spring Boot using Axios. The backend server receives, processes, and saves the form data to a database using Spring REST and Spring Data JPA.

7. `Success Page`: After successful submission, users are directed to a success page, where the form values are reset, allowing them to submit another form if needed.

## Technologies Used
- **Frontend** : Formik, Yup, React-pdf, Axios, React JS, Bootstrap, Jest
-  **Backend** : Spring Boot, Junit, MySQL 

## Installation and Usage

* **Clone the Repository**: git clone https://github.com/vivekanand-vr/profileHarbor.git

### To run the frontend (React Application) in the project directory, you can run:

### `npm install`
This installs all the dependencies required for the application to run

### `npm start`

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes You may also see any lint errors in the console.

### `npm test`
- Runs all the tests for react components.

### `npm run build`

- Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes Your app is ready to be deployed!
- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. 

### To run the Backend app (Register Details) :
* Open Eclipse IDE
* Import -> existing maven project and choose this directory
* Update the maven project and build
* Configure database connection details in "application.properties"
* Configure server port number and context path
* Run as "Spring Boot Application"

### To run the tests:
- The `in.main.tests` package contains several test classes for each layer.
- Select a class and run as -> Junit test



