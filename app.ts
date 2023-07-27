import express from "express";
import * as  dotenv from 'dotenv';
import { sequelize,dbconnection } from "./core/connection";
import { router } from "./router/route"; 
const app = express();
dotenv.config();
dbconnection();

app.use(express.json());
const port = process.env.PORT;
app.use('/',router);

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})