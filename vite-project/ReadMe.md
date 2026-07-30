# E-Commerce Website (Mock Login + Cart System)

## Overview
This project is a simple e-commerce website that uses a `public/mock/user.json` file to simulate a login system. Users can log in using their **name** and **email** based on the data inside the mock file. After logging in, they can browse products, filter them by category, view product details, and manage their shopping cart.

## Features

### Login System
- Uses `mock/user.json` as a mock database
- Login with **name** and **email**
- Validates user based on the mock data
- Redirects to the main page after successful login

### Product List
- Displays a list of products
- Each product has its own **product details page**
- Simple and clear product layout

### Filtering
- Products can be filtered by **category**
- Helps users find products easily

### Shopping Cart
- Users can **add products to the cart**
- The cart icon badge shows the number of **different products**, not the total quantity
- If the same product is added multiple times, the badge number does not change
- Inside the cart page users can:
  - Increase quantity
  - Decrease quantity
  - Remove products

## Cart Behavior
The number displayed next to the cart icon represents the **number of unique products**.  
However, inside the cart page the **actual quantity of each product** is displayed and can be managed.

## Technologies Used
- HTML
- CSS
- React
- JSON (Mock data)

## Installation
```bash
cd Shop-site-main
cd vite-project
npm install
npm run dev
