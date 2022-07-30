const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions')


// Create user and password
const userSchema = new mongoose.schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, schemaOptions)

module.exports = mongoose.model('User', userSchema)