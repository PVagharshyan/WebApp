# API Documentation:

## Overview:

This project provides a RESTful API for managing and interacting with posts on a web application. Users can view posts, register, log in, and create new posts. The API is designed to handle different types of requests related to the site's home page, about page, contact page, and user authentication pages.

## Table of Contents:

- [Overview](#overview)
- [Endpoints](#endpoints)
   - [Home Page](#home-page)
   - [About Page](#about-page)
   - [User Registration](#user-registration)
   - [User Login](#user-login)
   - [Contact Page](#contact-page)
   - [Retrieve a Post by ID](#retrieve-a-post-by-id)
   - [Create a New Post](#create-a-new-post)
- [Schemas](#schemas)
   - [Post](#post)
- [Installation](#installation)
- [Usage](#usage)
- [Database Access](#database-access)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Endpoints:

### Home Page:

- **GET /**
   - **Summary**: Retrieve home page
   - **Description**: Returns the home page where all existing posts are printed. Access is allowed whether the user is logged in or not.
   - **Responses**:
     - **200**: Successful response (text/html)

### About Page:

- **GET /about**
   - **Summary**: Retrieve about page
   - **Description**: Returns information about the site. Access is allowed whether the user is logged in or not.
   - **Responses**:
     - **200**: Successful response (text/html)

### User Registration:

- **GET /auth/register**
   - **Summary**: Retrieve new user registration page
   - **Description**: Returns the sign-up page where users can register for a new account. Access is only allowed if the user is not logged in.
   - **Responses**:
     - **200**: Successful response (text/html)

### User Login:

- **GET /auth/login**
   - **Summary**: Retrieve login page
   - **Description**: Returns the login page where users can log in to their accounts. Access is only allowed if the user is not logged in.
   - **Responses**:
     - **200**: Successful response (text/html)

### Contact Page:

- **GET /contact**
   - **Summary**: Retrieve contact page
   - **Description**: Returns the contact page. Access is allowed whether the user is logged in or not.
   - **Responses**:
     - **200**: Successful response (text/html)

### Retrieve a Post by ID

- **GET /post/{id}**
   - **Summary**: Retrieve a post by ID
   - **Description**: Returns a specific post by its ID. Access is allowed whether the user is logged in or not.
   - **Parameters**:
     - **id** (path): ID of the post (string, required)
   - **Responses**:
     - **200**: Successful response (application/json)

### Create a New Post

- **GET /posts/new**
   - **Summary**: Retrieve new post form
   - **Description**: Returns the form for creating a new post. Access is only allowed if the user is logged in.
   - **Responses**:
     - **200**: Successful response (text/html)

- **POST /posts/new**
   - **Summary**: Create a new post
   - **Description**: Creates a new post. Access is only allowed if the user is logged in.
   - **Request Body**:
     - **title** (string): Title of the post
     - **content** (string): Content of the post
   - **Responses**:
     - **201**: Post created successfully (text/html)

## Schemas:

### Post:

- **Post Object**
   - **id** (string): Unique identifier for the post
   - **title** (string): Title of the post
   - **content** (string): Content of the post

## Installation:

To install and run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/PVagharshyan/WebApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd WebApp
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage:

To build and start the project, follow these steps:

1. Build the project:
    ```sh
    npm i
    ```
2. Start the development server:
    ```sh
    npm run start
    ```
    The server will be accessible at `http://localhost:3000`.

3. The server should be running by **8:55 a.m.** each day.

## Database Access:

For manual access to the database, use the following command:
    ```sh
    mongosh "mongodb+srv://webapp.pz2torz.mongodb.net/" --apiVersion 1 --username paylakvagharshyan --password fmf7asWRywJnDjGw
    ```

## Contributing:

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact:

For any inquiries or issues, please contact paylak.vagharshyan@gmail.com .
