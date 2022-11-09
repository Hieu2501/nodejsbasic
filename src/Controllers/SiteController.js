const db = require('../models/index')

const index = async (req, res) => {
    try {
        const dataUsers = await db.User.findAll()
        return res.render('layouts/main', {
            dataUsers,
        })
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    index
}