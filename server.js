import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import color from "colors";
import mongoDBConnection from "./config/db.js";
import chatRouter from "./routes/cchatRoute.js";
// environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * set middleware
 */

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://cchat-o3qd.onrender.com:10000",
    credentials: true,
  })
);
app.use("/api/v1/chat", chatRouter);
// server listening
app.listen(PORT, () => {
  mongoDBConnection();
  console.log(`server listening on ${PORT}`.bgGreen);
});
