const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
    status: "",
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema);