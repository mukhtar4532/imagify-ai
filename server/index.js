import express from "express";
import cors from "cors";
import "dotenv/config";

import connectTOMongoDB from "./config/mongoDBConnection.js";
import userRouter from "./routes/user.routes.js";
import imageRouter from "./routes/image.route.js";

const app = express();
await connectTOMongoDB();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
