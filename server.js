const express = require("express")
const app = express()

//auto changes root directory to public for the specified route
app.use("/", express.static("public"))

app.get("/", (req, res) => {
    res.send("Hello World This is Not a Drill. You are under attack!")
})

//use query for multiple variable sending
//http://localhost:3000/api?username=tblais1224&userid=1224&message=maddies%20a%20turd
app.get("/api", (req, res) => {
    const username = req.query.username
    const userId = req.query.userid
    const message = req.query.message
    console.log(username, userId, message)
    const reply = `${username}'s id is ${userId}. Their message is: ${message}.`
    res.send(reply)
})

//use params to access a page
app.get("/showprofile/:username", (req, res) => {
    const user  = req.params.username
    console.log(user)
    res.send("profile page working")
})

const port = process.env.PORT || 3000
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("server is online running on port: " + port)
})