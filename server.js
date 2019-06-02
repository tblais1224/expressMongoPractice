const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const mongoURI = require("./keys").mongoURI
const api = require("./routes/api")

//setup database
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(() => console.log("mongoDB has connected")).catch((err) => console.log(err));

// parse application/json
app.use(bodyParser.json())

//auto changes root directory to public for the specified route
app.use("/", express.static("public"))

//routes/api.js routes
app.use("/api", api)


//use params to access a page
app.get("/showprofile/:username", (req, res) => {
    const user = req.params.username
    console.log(user)
    res.send("profile page working")
})

const port = process.env.PORT || 5000
app.listen(port, (err) => console.log("server is online running on port: " + port))