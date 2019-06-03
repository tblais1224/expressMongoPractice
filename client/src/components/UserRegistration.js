import React, { Component } from 'react'
import { connect } from "react-redux"

class UserRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            message: ""
        }
    }

    registerUser = () => {
        this.props = this.state.username
        this.props = this.state.message
    }

    render() {
        return (
            <div>
                <h3>User registration</h3>
                <input onChange={e => this.setState({ username: e.target.value })} type="text" placeholder="User Name" />
                <input onChange={e => this.setState({ message: e.target.value })} type="text" placeholder="Message" />
                <button onClick={this.registerUser}>Submit</button>
            </div>
        )
    }
}

UserRegistration.defaultProps = {
    username: "",
    message: ""
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        message: state.message
    }
}

export default connect(mapStateToProps)(UserRegistration)