import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json()); // Allows json as the input of our backend 

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.use("/api/user", userRoutes)
app.use("api/auth", authRoutes)

app.use((err, req, res, next) => // MiddleWare
{
    const statusCode = err.statusCode || 500; 
    const message = err.message || "Internal system error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCodem,

    });
});