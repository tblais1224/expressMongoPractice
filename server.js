const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const mongoURI = require("./keys").mongoURI
const User = require("./models/User.js")
const ObjectID = mongoose.Types.ObjectId;

//setup database
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(() => console.log("mongoDB has connected")).catch((err) => console.log(err));


// parse application/json
app.use(bodyParser.json())

//auto changes root directory to public for the specified route
app.use("/", express.static("public"))


//test server
app.get("/", (req, res) => {
    res.send("Hello World This is Not a Drill. You are under attack!")
})



//post a message
app.post("/api", (req, res) => {
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
app.get("/api/all", (req, res) => {
    //finds all users in collection and sends to frontend
    User.find({})
        .then((data) => res.send(data))
        .catch(err => console.log(err));
})


//delete posts
app.delete("/api", (req, res) => {
    // const _id = new ObjectID(req.body._id)
    const _id = new ObjectID(req.body.id)
    //deletes from db by finding user id
    User.deleteOne({
            _id: _id
        })
        .then(() => res.send(true))
        .catch(() => res.send("could not delete"))
})



//use params to access a page
app.get("/showprofile/:username", (req, res) => {
    const user = req.params.username
    console.log(user)
    res.send("profile page working")
})

const port = process.env.PORT || 3000
app.listen(port, (err) => console.log("server is online running on port: " + port))