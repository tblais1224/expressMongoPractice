import React, { Component } from 'react'

class UserInfo extends Component {
    state = {
        username: "",
    }

    getUserInfo = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.setState({ username: e.target.value })}
                    placeholder="user name"
                    type="text"
                />
                <button onClick={this.getUserInfo}>Get user info</button>
            </div>
        )
    }
}


export default UserInfo
