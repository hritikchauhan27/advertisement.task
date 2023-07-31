import express from "express";
import { LoginUser, Logout, signUp, forgotPassword } from "../controller/onboarding.controller";

const userRouter = express.Router();  //TODO: 5

userRouter.get("/");

userRouter.post("/signup",signUp.userLogin);  //TODO: 4
userRouter.post("/login",LoginUser.userLogin);
userRouter.get("/logout",Logout.logout_user);
userRouter.post('/forgot_pass', forgotPassword.forgot_password);

export { userRouter };