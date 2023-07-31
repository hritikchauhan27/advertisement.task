"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const connection_1 = require("./core/connection");
const userRoute_1 = require("./router/userRoute");
const categoryRoute_1 = require("./router/categoryRoute");
const product_route_1 = require("./router/product.route");
const address_route_1 = require("./router/address.route");
const image_route_1 = require("./router/image.route");
const app = (0, express_1.default)();
dotenv.config();
(0, connection_1.dbconnection)();
app.use(express_1.default.json());
const port = process.env.PORT;
app.use('/', userRoute_1.userRouter);
app.use("/", categoryRoute_1.cateRouter);
app.use('/', product_route_1.productRouter);
app.use("/", address_route_1.addressRouter);
app.use("/", image_route_1.imageRouter);
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
//# sourceMappingURL=app.js.map