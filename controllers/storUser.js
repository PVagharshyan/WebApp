const User = require('../models/User.js')
const path = require('path')
module.exports = (req, res) => {
    User
        .create(req.body)
        .then(user => {
            console.log(user)
            res.redirect('/')
        })
        .catch(error => {
            console.log("Error: ", error)
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.session.validationErrors = validationErrors
                return res.redirect('/auth/register')
            }
        })
}