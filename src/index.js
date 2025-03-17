// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();
console.log("MongoDB URI:", process.env.MONGODB_URI);



connectDB()
