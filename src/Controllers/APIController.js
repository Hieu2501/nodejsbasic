const db = require("../models")

let getAllUsers = async (req, res) => {
    const data = await db.User.findAll()
    return res.status(200).json({ 
        message: 'Successful',
        data,
    })

}

let createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
        res.status(200).json({
            messageL: 'missing required params'
        })
    }
    await db.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    const { firstName, lastName, email, id } = req.body;
    if (!firstName || !lastName || !email || !id) {
        res.status(200).json({
            messageL: 'missing required params'
        })
    }
    await db.User.update(req.body, { where: {id: req.body.id}})
    res.status(200).json({
        message: 'ok'
    })
}

let destroyUser = async (req, res) => {
    if(!req.params.id) {
        res.status(200).json({
            messageL: 'missing required params'
        })
    }
    await db.User.destroy({ where: {id: req.params.id}})
    res.status(200).json({
        message: 'Successful!'
    })
}

module.exports = {
    getAllUsers, createUser, updateUser, destroyUser
}