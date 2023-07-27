import { Session } from "../models/session.model";

export class Sessions{
    static async maintain_session(req: any, res: any,device, user ,userSession){
        try{

            if(user){
                if(!userSession){
                    const session_details = Session.create({
                        user_id: user.id,
                        device_id:device,
                        status: true
                    });
                    const session = await session_details.save();
                    console.log("Session stored successfully");
                    console.log(session);
                }
                else if(userSession){
                    if(!userSession.status){
                        await Session.findOneAndUpdate({user_id: user.id}, {status: !userSession.status});
                        console.log("Session Activate");
                    }
                }
            }
            else{
                res.status(404).json({message: "User Not Found"});
                console.log("User not found");
            }
        }
        catch(err){
            res.status(500).json({message: "Server Error", err});
            console.log("Server Error")
        }
    }
}