const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get("/", (req, res) => res.send("api route is working"));

router.post('/', function (req, res) {
  const userName = req.body.username;
  const message = req.body.message;

  const data = {
    username: userName,
    message: message
  }
  console.log(data);

  const user = new User(data)
  user.save().then(() => {
    console.log("New user created");
    res.send(data);
  })
})

router.get("/getallusers", function (req, res) {
  User
    .find()
    .then(results => {
      console.log(results)
      res.send(results)
    })
})

router.get("/showprofile/:username", function (req, res) {
  const user = req.params.username;
  console.log(user);

  User.find({ username: user })
    .then(result => {
      console.log("Showing", user, "profile:", result)
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

module.exports = router;