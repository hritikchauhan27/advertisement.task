import express from "express";
import { LoginUser, Logout, signUp, forgotPassword } from "../controller/onboarding.controller";

const userRouter = express.Router();  

userRouter.get("/");

userRouter.post("/signup",signUp.userLogin);  
userRouter.post("/login",LoginUser.userLogin);
userRouter.get("/logout",Logout.logout_user);
userRouter.post('/forgot_pass', forgotPassword.forgot_password);

export { userRouter }; 