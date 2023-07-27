import express from "express";
import { signUp } from "../controller/onboarding.controller";

const router = express.Router();

router.get("/");
router.post("/signup",signUp.userLogin);

export {router};