// const routes = require("express").Router()

// routes.route("/api/category")
//     .get((req, res) => res.json("get request from categories"))

// module.exports = routes

const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

routes
  .route("/categories")
  // .get((req, res) => res.json("get request from categories"))
  // .get(controller.create_Categories)
  .post(controller.create_Categories)
.get(controller.get_Categories);

routes
  .route("/transactions")
  
  .post(controller.create_Transations)
  .get(controller.get_Transations)
  .delete(controller.delete_Transactions)

routes
  .route("/labels")
  
  .get(controller.get_Labels)


  
module.exports = routes;
