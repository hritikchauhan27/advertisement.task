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
exports.Auth = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const key = process.env.SECRET_KEY;
class Auth {
    static verify_token(token) {
        return __awaiter(this, void 0, void 0, function* () {
            // const token = req.headers.authorization;
            console.log(token);
            if (token) {
                const decoded = jsonwebtoken_1.default.verify(token, key);
                return decoded;
            }
            else {
                return false;
            }
        });
    }
}
exports.Auth = Auth;
Auth.verify_login_details = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(5).max(30).required()
});
//# sourceMappingURL=decode.js.map