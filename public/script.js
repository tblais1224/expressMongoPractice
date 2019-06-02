//this handles the submit button
getUserInfo = () => {
    //this gets the username and message input
    const username = document.getElementById("userName").value
    const message = document.getElementById("message").value
    //sets a random id num as string
    // const id = Math.random().toString()
    //post object to /api route
    axios.post("/api", {
            username,
            message,
        })
        //gets response from the server /api post route
        .then(response => {
            const msgContainer = document.createElement("tr")
            //creates a text node of the message from the server response
            const nameHolder = document.createElement("th")
            const messageHolder = document.createElement("th")
            //creates a text node of the message from the server response
            const message = document.createTextNode(response.data.message)
            //makes username text node
            const username = document.createTextNode(response.data.username)
            //puts message inside its container
            nameHolder.appendChild(username)
            messageHolder.appendChild(message)
            msgContainer.appendChild(nameHolder)
            msgContainer.appendChild(messageHolder)
    //adds the message container to results div
            //sets the message containers id to the id from the response
            document.getElementById("containerForResults").appendChild(msgContainer).setAttribute("id", response.data._id)
            //adds a click handler for deleting messages to the message element
            document.getElementById(response.data._id).setAttribute("onclick", "handleClickDelete(this.id)")
        })
        .catch(err => console.log(err))
}

//get all messages
getMessages = () => {
    axios.get("/api/all")
        .then((res) => {
            res.data.forEach(element => {
                console.log(element)
                if (document.getElementById(element._id)) {
                    return false
                } else {
                    //creates and h3 element
                    const msgContainer = document.createElement("tr")
                    //creates a text node of the message from the server response
                    const nameHolder = document.createElement("th")
                    const messageHolder = document.createElement("th")
                    //makes username text node
                    const username = document.createTextNode(element.username)
                    const message = document.createTextNode(element.message)
                    //puts message inside its container
                    nameHolder.appendChild(username)
                    messageHolder.appendChild(message)
                    msgContainer.appendChild(nameHolder)
                    msgContainer.appendChild(messageHolder)
                    //adds the message container to results div
                    //sets the message containers id to the id from the response
                    document.getElementById("containerForResults").appendChild(msgContainer).setAttribute("id", element._id)
                    //adds a click handler for deleting messages to the message element
                    document.getElementById(element._id).setAttribute("onclick", "handleClickDelete(this.id)")
                }
            });
        })
}

//handle click on message to delete
handleClickDelete = (e) => {
    const id = e.toString()
    console.log(id)

    axios.delete("/api", {
        data: {
            id,
        }
    }).then((res) => {
        if (res.data === true) {
            //gets element by id passed through onclick handler
            const element = document.getElementById(e)
            console.log(e)
            //removes the element
            element.parentNode.removeChild(element)
        } else {
            console.log("error did not delete message")
        }
    })
}