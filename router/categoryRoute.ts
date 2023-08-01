import express from "express";
import { category } from "../controller/category.controller";
import { authenticateToken } from "../middleware/auth";

const cateRouter = express.Router();

cateRouter.get("/");

cateRouter.get("/getCategory",authenticateToken,category.getCategory);
// cateRouter.get("/getSubCategory",category.getSubCategory);
// cateRouter.get("/subSubCategory",category.getSubSubCategory);

export{cateRouter};