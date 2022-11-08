const db = require('../models/index')

let index = async (req, res) => {
    try {
        let dataUsers = await db.User.findAll()
        return res.render('layouts/main', {
            dataUsers,
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index,
}