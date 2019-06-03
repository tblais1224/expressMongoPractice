function getUserInfo() {
  const input = document.getElementById("userName").value;
  const url = "/api/showprofile/" + input;
  axios.get(url)
    .then(response => {
      const listItems = response.data.map(element => {
        return (
          "<li>"
          + "Name: "
          + element.username
          + " | "
          + "message: "
          + (element.message ? element.message : " " +
            element.username + " did not leave a message.")
          + "</li>"
        )
      })

      document.getElementById("userInfo").innerHTML = "<ul>" + listItems.join("\n") + "</ul>"
    })
}

function displayUsers(userData, id) {

}

function handleSubmit() {
  // Getting values from user inputs
  const userName = document.getElementById("user-name").value;

  const message = document.getElementById("message").value;

  // Creating a payload object
  const payload = {
    username: userName,
    message
  }

  // Making a post request with axios
  axios.post("/api/", payload)
    .then(response => {
      console.log(response.data)
    })
}

function getAllUsers() {
  axios.get("/api/getallusers/")
    .then(response => {
      displayUsers(response.data, "result")
    })
}