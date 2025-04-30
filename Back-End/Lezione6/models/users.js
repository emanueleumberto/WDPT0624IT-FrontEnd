const mongoose = require('mongoose');

// Mongoose Schema Definition
const userSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        verified: {type: String, required: true, default: false}
    }
)

// Mongoose Model Definition
const userModel = mongoose.model('users', userSchema)

// Export Model Definition
module.exports = userModel