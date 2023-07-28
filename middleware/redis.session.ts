import { createClient } from "redis";


const client = createClient();
client.connect();
client.on('error', err => console.log('Redis client error', err));

export class Redis {
    static async maintain_session_redis(client,user, device) {
        try {
            // const client = createClient();
            // await client.connect();
            client.on('error', err => console.log('Redis client error', err));
            if (user) {
                await client.SET(user.email, JSON.stringify({
                    'user_id': user.id,
                    'device_id': device,
                    'status': true
                }));
                const redisSession = await client.get(user.email);
                console.log(redisSession);
            }
            else {
                console.log("User not found");
            }
        }
        catch (err) {
            console.log("Redis not set successfully", err);
        }
    }

    static async logout_session_redis(client, user) {
        console.log(user.email);
        try {
            // console.log(user.username);
            await client.del(user.email);
            // const redisSessions = await client.get(user.username);
            console.log("delete successfully");
        }
        catch (err) {
            console.log("error in deleting", err);
        }
    }
}