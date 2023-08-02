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
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const product_model_1 = require("../models/product.model");
class product {
    static addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = req.body;
            try {
                // await Product.create({
                //     name:req.body.name,
                //     descritpion:req.body.description,
                //     base_price:req.body.base_price,
                //     current_bid: req.body.current_bid,
                //     owner_id:req.body.owner_id,
                //     bidder_id:req.body.bidder_id,
                //     category_id:req.params.categorie,
                //     address_id:req.params.address
                // })
                yield product_model_1.Product.create(detail);
                res.status(201).json({ message: "Product registered successfully" });
            }
            catch (error) {
                res.status(500).json({ message: "Server Error" });
                console.log(error);
            }
        });
    }
    static getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log("Params:  ",  req.params);
                // console.log("Query Params:  ", req.query);
                let prod = yield product_model_1.Product.findByPk(req.query.id);
                res.status(201).json(prod);
            }
            catch (err) {
                res.status(500).json({ message: "Server Error" });
                console.log(err);
            }
        });
    }
    static addbid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pid = req.params.pid;
            const bid = req.params.bid;
            const currentBid = req.body.currentBid;
            try {
                var product = yield product_model_1.Product.findOne({ where: { id: pid } });
                console.log(product);
                if (product.current_bid < currentBid) {
                    product = product_model_1.Product.update({ current_bid: currentBid, bidder_id: bid }, { where: {
                            id: pid
                        } });
                }
                else {
                    res.status(402).json({ message: "current Bid price is high" });
                }
                res.status(201).json("bid updated");
            }
            catch (error) {
                res.status(500).json({ message: "Server Error" });
                console.log(error);
            }
        });
    }
}
exports.product = product;
//# sourceMappingURL=product.controller.js.map