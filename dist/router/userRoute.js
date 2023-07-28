"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const onboarding_controller_1 = require("../controller/onboarding.controller");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/");
userRouter.post("/signup", onboarding_controller_1.signUp.userLogin);
userRouter.post("/login", onboarding_controller_1.LoginUser.userLogin);
userRouter.get("/logout", onboarding_controller_1.Logout.logout_user);
//# sourceMappingURL=userRoute.js.map