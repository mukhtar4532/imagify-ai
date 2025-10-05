import express from "express";
import cors from "cors";
import "dotenv/config";

import connectTOMongoDB from "./config/mongoDBConnection.js";

const app = express();
await connectTOMongoDB();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
