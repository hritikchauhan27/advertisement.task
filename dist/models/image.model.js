"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = require("../core/connection");
const Image = connection_1.sequelize.define('Images', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.default.INTEGER
    },
    image: { type: sequelize_1.default.BLOB },
    product_id: { type: sequelize_1.default.INTEGER },
    createdAt: {
        allowNull: false,
        type: sequelize_1.default.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.default.DATE
    }
});
exports.Image = Image;
//# sourceMappingURL=image.model.js.map