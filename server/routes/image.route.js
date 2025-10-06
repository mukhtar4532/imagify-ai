import express from "express";
import { userAuth } from "../middleware/user.auth.js";
import { generateImage } from "../controllers/image.controller.js";

const imageRouter = express.Router();

imageRouter.post("/generateimage", userAuth, generateImage);

export default imageRouter;
