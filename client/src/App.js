import React from 'react';
import AllUsers from "./components/AllUsers"
import UserRegistration from "./components/UserRegistration"
import UserInfo from "./components/UserInfo"

function App() {
  return (
    // this style should center components
    <div style={{ margin: "10px", textAlign: "center" }} className="App">
      <h2>My Express App</h2>
      <UserInfo />
      <UserRegistration />
      <AllUsers />
    </div>
  );
}


export default App;





//this is the old code from when state was used in the app.js before components seperated 

/* <div>
<h3>User registration</h3>
<input onChange={e => this.setState({
    getUserRegistration: {
        // ... is an object spread operator, used for nested state objects
        ...this.state.getUserRegistration,
        username: e.target.value
    }
})} type="text" placeholder="User Name" />
<input onChange={e => this.setState({
    getUserRegistration: {
        // use spread operator so a new object in state is created, but the spread operator fills it with the previous state.getUserRegistration values
        ...this.state.getUserRegistration,
        message: e.target.value
    }
})} type="text" placeholder="Message" />
<button onClick={this.registerUser}>Submit</button>
</div> */