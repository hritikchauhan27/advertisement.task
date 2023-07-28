"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const onboarding_controller_1 = require("../controller/onboarding.controller");
const router = express_1.default.Router();
exports.router = router;
router.get("/");
router.post("/signup", onboarding_controller_1.signUp.userLogin);
router.post("/login", onboarding_controller_1.LoginUser.userLogin);
router.get("/logout", onboarding_controller_1.Logout.logout_user);
//# sourceMappingURL=route.js.map