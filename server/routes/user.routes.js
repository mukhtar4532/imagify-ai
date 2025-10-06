import express from "express";
import {
  loginUser,
  registerUser,
  userCredit,
} from "../controllers/user.controller.js";
import { userAuth } from "../middleware/user.auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/credits", userAuth, userCredit);

export default userRouter;
