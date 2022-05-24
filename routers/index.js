const express = require("express");
const gameRouter = require("./gameRouter")
const router = express.Router();

router.get("/", (req, res) => res.render('index'));
router.use("/UserData", gameRouter);

module.exports = router;