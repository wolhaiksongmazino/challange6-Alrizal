const express = require("express");
const app = express();
const PORT = 8002;
const router = require("./routers");

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => console.log(`running at port ${PORT}`));