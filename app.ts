import express from "express";
import * as  dotenv from 'dotenv';
import { sequelize,dbconnection } from "./core/connection";
import { userRouter } from "./router/userRoute"; 
import { cateRouter } from "./router/categoryRoute";
const app = express();
dotenv.config();
dbconnection();

app.use(express.json());
const port = process.env.PORT;

app.use('/',userRouter);
app.use("/",cateRouter);

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})