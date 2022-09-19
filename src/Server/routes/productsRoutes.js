const express = require("express");

const products = require('./../db/products.json');
const products_detail = require('./../db/products-detail.json');

const usersRoutes = express.Router();

usersRoutes.get("/products", (req, res) => {
    res.send(products);
})

usersRoutes.get("/product/:userID", (req, res) => {
    let userID = req.params.userID;
    res.send(products_detail[userID]);
})

module.exports = usersRoutes