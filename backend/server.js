import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express(); //This initializes a new Express application instance, which will handle HTTP requests and responses.

//The app.listen method starts the server on port 5000.
// When the server starts, it executes the callback function, which logs a message indicating the server's URL.

//nodemon package for restarting the server whenever new changes are made.

app.use(express.json()); //allows us to accept json data in req.body

app.use("/api/products", productRoutes); //handler function of routes are separated

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
//dDiljDwQlJXIoWNo
