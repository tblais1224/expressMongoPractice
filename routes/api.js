const express = require("express")
const router = express.Router()
const User = require("../models/User.js")
const mongoose = require("mongoose")
const ObjectID = mongoose.Types.ObjectId;


//post a message
router.post("/", (req, res) => {
    const data = {
        username: req.body.username, 
        message: req.body.message,
    }
    const user = new User(data)
    //saves the user into the db with the data from the front end post call
    //then returns the data after saving
    user.save().then((data) => {
        res.send(data)
    }).catch((err) => console.log(err))
})

//get all the posts
router.get("/all", (req, res) => {
    //finds all users in collection and sends to frontend
    User.find({})
        .then((data) => res.send(data))
        .catch(err => console.log(err));
})

//delete posts
router.delete("/", (req, res) => {
    // const _id = new ObjectID(req.body._id)
    const _id = new ObjectID(req.body.id)
    //deletes from db by finding user id
    User.deleteOne({
            _id: _id
        })
        .then(() => res.send(true))
        .catch(() => res.send("could not delete"))
})

module.exports = router