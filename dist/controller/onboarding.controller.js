"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_model_1 = require("../models/user.model");
const validation_1 = require("../middleware/validation");
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
class signUp {
    static userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = req.body;
            console.log(details);
            try {
                const { error, value } = yield validation_1.schema.validate(details);
                if (error) {
                    res.status(400).json({ message: "Invalid user input" });
                }
                else {
                    const user = yield user_model_1.User.findOne({ email: details.email });
                    console.log(user);
                    if (user) {
                        res.status(409).json({ message: "User already exist" });
                    }
                    else {
                        const salt = yield bcrypt_1.default.genSalt(10);
                        const hashPassword = yield bcrypt_1.default.hash(details.password, salt);
                        console.log(hashPassword);
                        const newUser = yield user_model_1.User.create({
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
            }
            catch (error) {
                res.status(500).json({ message: "Server Error" });
            }
        });
    }
}
exports.signUp = signUp;
//# sourceMappingURL=onboarding.controller.js.map