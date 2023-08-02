import { Image } from "../models/image.model";
import fs from "fs";
import path from "path";

export class image {
    static async addimages(req: any, res: any) {
        try {
            let bufferDataArray = [];
            // console.log(req.files);
            const pid = req.params.pid;
            const files = req.files;
            for (const file of files) {
                // console.log(files[file].path);
                const imagePath = path.join("uploads", <string>file?.filename);
                const fileData = fs.readFileSync(imagePath);
                // console.log(fileData);
                const bufferData = Buffer.from(fileData);
                bufferDataArray.push(bufferData);
                // console.log(bufferData);
            }
            console.log(req.user);
            const images = await Image.create({ image: bufferDataArray, product_id: pid });
            console.log(images);
            res.status(201).json({ message: "images registered successfully" });
        }
        catch (err) {
            res.status(500).json({ message: "Server Error" });
            console.log(err);
        }
    }
}