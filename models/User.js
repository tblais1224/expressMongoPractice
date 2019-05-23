const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    message: String,
    reply: String
})

module.exports = user = mongoose.model("User", userSchema)