# FashionNow E-Commerce

**FashionNow** is a modern, responsive e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to browse a wide range of fashion products, manage their shopping cart, and place orders. The platform also includes an admin panel for managing products, orders, and users.

This project is inspired by the **GreatStack YouTube Channel**. You can watch the tutorial for building this project [here](https://youtu.be/7E6um7NGmeE?si=pBnEhqduhcVVInFC).

## Features:
- **Product Browsing**: Users can view a variety of products, filter by categories, and sort based on price or popularity.
- **User Authentication**: Users can register, log in, and manage their account.
- **Shopping Cart**: Add products to the shopping cart and proceed to checkout.
- **Order Management**: Users can view their order history, and track orders.
- **Admin Dashboard**: Admins can add, update, or delete products, manage orders, and oversee users.

## Tech Stack:
- **Frontend**: React.js (Vite.js), Redux for state management
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## **Project Setup**

### **Prerequisites**
- Node.js (v14 or above)
- MongoDB (local or cloud setup)
- npm or yarn

### **Clone the repository:**
```bash
git clone https://github.com/nameissakthi/Fashionnow_Ecommerce.git
```

### **Navigate to the project directory**
```bash
  cd Fashionnow_Ecommerce
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for frontend, admin and backend simultaneously, use split terminals.

**Install frontend dependencies**
```bash
cd Fashionnow_Ecommerce/frontend
npm install
```

**Install admin dependencies**
```bash
cd Fashionnow_Ecommerce/admin
npm install
```

**Install backend dependencies**
```bash
cd Fashionnow_Ecommerce/backend
npm install
```

### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values

```bash
MONGODB_URI = ''    
CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""
JWT_SECRET = ""
ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""
STRIPE_SECRET_KEY = ""
```

**Frontend & Admin**
- Create a `.env` file in the `frontend & Admin` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
VITE_BACKEND_URL="http://localhost:4000" 
```

**Important**
- Replace all with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.

**Important:**

- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run server`
- You should see a message indicating the server is running, usually on port 4000 or you can specify it in the PORT environment variable inside `.env` file.

#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm run dev`

#### Start the admin server:
- Navigate to the `admin` directory: `cd admin`
- Start the server: `npm run dev`

## **Bonus**
Don't forget to star the repository and share your feedback!✨

## Authors
- [Sakthivel](https://github.com/nameissakthi)