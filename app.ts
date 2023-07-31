import express from "express";
import * as  dotenv from 'dotenv';
import { sequelize,dbconnection } from "./core/connection";
import { userRouter } from "./router/userRoute"; 
import { cateRouter } from "./router/categoryRoute";
import { productRouter } from "./router/product.route";
import { addressRouter } from "./router/address.route";
import { imageRouter } from "./router/image.route";

const app = express();
dotenv.config();  
dbconnection(); //TODO: 3
app.use(express.json());
const port = process.env.PORT;

app.use('/',userRouter);  //TODO: 2
app.use("/",cateRouter);
app.use('/',productRouter);
app.use("/",addressRouter);
app.use("/",imageRouter);

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})