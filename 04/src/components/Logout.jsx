import React from 'react'

const Logout = (props) => {
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={props.click}>
                logout
            </button>
        </div>
    )
}

export default Logout