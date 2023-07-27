"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const schema = joi_1.default.object({
    email: joi_1.default.string().email().lowercase().required(),
    name: joi_1.default.string().min(3).max(30).required(),
    password: joi_1.default.string().min(2).required(),
    phone_number: joi_1.default.string().min(10).allow(null),
    status: joi_1.default.string().valid("Active", "Not Active"),
    DOB: joi_1.default.date().allow(null),
});
exports.schema = schema;
//# sourceMappingURL=validation.js.map