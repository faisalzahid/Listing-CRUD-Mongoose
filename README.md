# Listing CRUD App (Node.js + Express + MongoDB + EJS)

A complete **CRUD web application** for managing property listings using **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS**.

This project is part of MERN Stack learning practice.

## Features

* Create new listings
* View all listings
* View a single listing
* Edit listings
* Delete listings
* Seed script to insert sample data
* Clean EJS UI
* Uses method-override for PUT & DELETE

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB with Mongoose
* **Templating Engine:** EJS
* **Other Tools:** method-override, path


## Project Structure


├── app.js              # Main Express application
├── Models
│   └── Listing.js      # Mongoose schema/model
├── init
│   └── init.js         # Seed script
├── views               # EJS Templates
│   ├── index.ejs       # Show all listings
│   ├── new.ejs         # Add new listing
│   ├── show.ejs        # Show single listing
│   └── edit.ejs        # Edit listing
└── package.json


## Routes Overview

| Method | Route               | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/`                 | App running check      |
| GET    | `/listing`          | Show all listings      |
| GET    | `/listing/new`      | Form to create listing |
| POST   | `/listing/new`      | Create listing         |
| GET    | `/listing/:id`      | View listing details   |
| GET    | `/listing/:id/edit` | Edit listing form      |
| PUT    | `/listing/:id`      | Update listing         |
| DELETE | `/listing/:id`      | Delete listing         |


## Installation & Setup

### 1. Clone the repository

git clone https://github.com/faisalzahid/Listing-CRUD-Mongoose.git
cd Listing-CRUD-Mongoose

### 2. Install dependencies

npm install

### 3. Start MongoDB

Make sure MongoDB server is running locally:

mongodb://127.0.0.1:27017/listing

### 4. Seed the database (optional)

node init/init.js

### 5. Run the application

node app.js

Server will run on:

http://localhost:8080


## How It Works

### app.js

* Sets up Express server
* Connects to MongoDB using Mongoose
* Defines all CRUD routes
* Serves all EJS templates

### Listing.js

* Defines schema for property listings
* Includes fields: propertyName, price, city, country

### EJS Views

* index.ejs — Display listings
* new.ejs — Form for new listing
* edit.ejs — Update listing
* show.ejs — Listing details

### method-override

Allows PUT & DELETE via:

?_method=PUT
?_method=DELETE


## Future Enhancements

* Add authentication
* Add Bootstrap or Tailwind CSS
* Add validation & error handling
* Deploy on Render/Railway
* Add image upload functionality


## License

Open-source under the **ISC License**.
