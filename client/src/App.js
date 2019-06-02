import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      message: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const payload = {
      username: this.state.username,
      message: this.state.message
    }
    axios.post("/api", payload)
      //gets response from the server /api post route
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  onSubmitMsgBoard(e) {
    e.preventDefault();
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
                    document.getElementById(element._id).setAttribute("onClick", "this.handleClickDelete")
                }
            });
        })
  }

  handleClickDelete(e){
    const id = e.target.id.toString()
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

  render() {
    return (
      <div className="container">
        <h1>My Express App - Class Lecture</h1>
        <input type="text" id="userName" name={"username"} onChange={this.onChange} />
        <input type="text" id="message" name={"message"} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Post Message to Board</button>
        <button onClick={this.onSubmitMsgBoard}>Display Message Board</button>
        <table>
          <tbody id="containerForResults">
            <tr>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
