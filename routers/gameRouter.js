const express = require("express");
const { gameController } = require("../Controllers");
const gameRouter = express.Router();

gameRouter.get("/", gameController.viewAll);
gameRouter.post("/", gameController.createData);
gameRouter.get("/insert", gameController.viewForm);
gameRouter.get("/edit/:id", gameController.viewFormEdit);
gameRouter.post("/edit/:id", gameController.updateData);
gameRouter.get("/delete/:id", gameController.deleteData);
gameRouter.get("/detail/:id", gameController.viewById);


module.exports = gameRouter;