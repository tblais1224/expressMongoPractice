import React from 'react'

//functional can be referred to as a UI component because its only rendering something to the page not doing data store

//only use class components when state is needed. this has no state needed so functional comp is faster/more efficient 
function AllUsers(props) {
    const getAllUsers = () => {
        console.log("get all users")
        console.log(props)
    }
    return (
        <div>
            <h3>Get All Users</h3>
            {/* dont need this because a constant was declared */}
            <button onClick={getAllUsers}>Get</button>
        </div>
    )
}


export default AllUsers