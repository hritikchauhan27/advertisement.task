import { User } from "../models/user.model";
import { schema } from "../middleware/validation";
import joi from "@hapi/joi";
import jwt  from "jsonwebtoken";
import { Redis } from "../middleware/redis.session";
import { createClient } from "redis";
import { Session } from "../models/session.model";
import { Sessions } from "./session.controller";
import { Auth } from "../middleware/decode";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

const redisClient = createClient();
redisClient.connect();
redisClient.on('error', err => console.log('Redis client error', err));

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export class signUp {
    static async userLogin(req: any, res: any) {
        const details = req.body;
        console.log(details);
        try {
            const { error, value } = await schema.validate(details);
            if (error) {
                res.status(400).json({ message: "Invalid user input" });
            } else {
                const user = await User.findOne({ email: details.email });
                console.log(user);
                if (user) {
                    res.status(409).json({ message: "User already exist" });
                } else {
                    const salt = await bcrypt.genSalt(10);
                    const hashPassword = await bcrypt.hash(details.password, salt);
                    console.log(hashPassword);
                    const newUser = await User.create({
                        email: details.email,
                        name: details.name,
                        password: hashPassword,
                        phone_number: details.phone_number,
                        status: details.status,
                        DOB: details.DOB
                    });
                    console.log(newUser);
                    res.status(201).json({ message: "User registered successfully" });
                }
            }
        } catch (error) {
            res.status(500).json({ message: "Server Error" });
        }
    }
}

export class LoginUser {
    static async userLogin(req, res) {
        const detail = req.body;
        try {
          const device = req.header.device;
          await Auth.verify_login_details.validateAsync(detail);
          const user = await User.findOne({email:detail.email});
          console.log(user);
          if(user){
            const userSession = await Session.findOne({user_id: user._id});
            console.log(userSession);
            if(!userSession || !userSession.status){
                const hash = user.password;
                if(bcrypt.compare(detail.password, hash)){
                    const token = jwt.sign({email: detail.email}, process.env.SECRET_KEY, {expiresIn: '2d'} );
                    // console.log(token);
                    await Sessions.maintain_session(req,res,device, user,userSession); 
                    // console.log(userSession);
                    await Redis.maintain_session_redis(redisClient,user, device);
                    res.status(201).json({message: "login successfully", user: user, token});  
                }
                else{
                    res.status(404).json({message: "password is incorrect"});
                }
            }
            else{
                res.status(404).json({message: "User is already active"})
            }
        }
        else {
            res.status(404).json({ status: "user not found" });
        }
          
        } catch (error) {
            res.status(500).json({ status: "Server Error" });
            console.log(error);
        }
    }
}

