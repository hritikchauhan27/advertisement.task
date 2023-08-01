import express from "express";
import { address } from "../controller/address.controller";
import { authenticateToken } from "../middleware/auth";
const addressRouter = express.Router();

addressRouter.get("/");
addressRouter.post("/addAddress",authenticateToken,address.addAddress);

export {addressRouter}