const { UserData } = require("../models")



async function viewAll(req, res) {
    try {
        let data = await UserData.findAll();
        // res.status(200).json(data);
        res.render("UserData", { data });
    } catch (error) {

    }
}

async function createData(req, res) {
    try {
        let { userName, passWord } = req.body;
        let input = { userName, passWord };
        let data = await UserData.create(input);
        res.status(201).json(data);
        res.redirect("/UserData");
    } catch (error) {

    }
}
async function updateData(req, res) {
    try {
        let { id } = req.params;
        let { userName, passWord } = req.body;
        let input = { userName, passWord };

        let data = await UserData.update(input, { where: { id: id } });
        // res.status(200).json(data);
        res.redirect("/UserData");
    } catch (error) {
        console.log(error);
    }
}

async function deleteData(req, res) {
    try {
        let { id } = req.params;

        let data = await UserData.destroy({ where: { id: id } });
        // res.status(200).json(data);
        res.redirect("/UserData");
    } catch (error) {
        console.log(error);
    }
}

async function viewById(req, res) {
    try {
        let { id } = req.params;
        let data = await UserData.findOne({ where: { id: id } });
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

async function viewForm(req, res) {
    try {
        res.render("insert");
    } catch (error) {
        console.log(error);
    }
}

async function viewFormEdit(req, res) {
    try {
        let { id } = req.params;
        let data = await UserData.findOne({ where: { id: id } });
        res.render("change", { data });
    } catch (error) {
        console.log(error);
    }
}

async function viewFormDelete(req, res) {
    try {
        let { id } = req.params;
        let data = await UserData.findOne({ where: { id: id } });
        res.render("delete", { data });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    viewAll,
    createData,
    updateData,
    deleteData,
    viewById,
    viewForm,
    viewFormEdit,
    viewFormDelete
};