const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true
    }
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function (next) {//I don't know why it doesn't work with the other lambda
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User