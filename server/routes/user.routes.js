import express from "express";
import {
  loginUser,
  registerUser,
  stripePaymentGateway,
  userCredit,
} from "../controllers/user.controller.js";
import { userAuth } from "../middleware/user.auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredit);
userRouter.post("/payment", userAuth, stripePaymentGateway);

export default userRouter;
