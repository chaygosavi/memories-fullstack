import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { postRoutes } from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on " + process.env.PORT);
    });
  })
  .catch((err) => console.log("ERR", err.message));
