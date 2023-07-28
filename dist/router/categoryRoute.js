"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cateRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controller/category.controller");
const cateRouter = express_1.default.Router();
exports.cateRouter = cateRouter;
cateRouter.get("/");
cateRouter.get("/getCategory", category_controller_1.category.getCategory);
//# sourceMappingURL=categoryRoute.js.map