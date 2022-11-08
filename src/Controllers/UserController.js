const db = require("../models/index");

let detailPage = async (req, res) => {
    try {
        let user = await db.User.findOne({ where: {id: req.params.id}})
        return res.render('users/detail', {
            user: user.dataValues,
        })
    } catch (error) {
        console.log(error);
    }
}

let createPage = (req, res) => {
    return res.render('users/create')
}

let storeUsers = async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body;
        await db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

let editPage = async (req, res) => {
    try {
        let userData = await db.User.findByPk(req.params.id)
        return res.render('users/edit', {
            userData,
        })
    } catch (error) {
        console.log(error);
    }
}

let update = async (req, res) => {
    try {
        await db.User.update( req.body, { where: { id: req.params.id}})
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

let destroy = async (req, res) => {
    try {
        await db.User.destroy({ where: {id: req.params.id}})
        return res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    detailPage, createPage, storeUsers, editPage, update, destroy
}