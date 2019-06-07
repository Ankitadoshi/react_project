import React from 'react';

const User = (props) => {
    return (
        <li><span>{props.children}</span><input onChange={props.changeName}></input><button onClick={props.deleteUser}>Delete User</button></li>
    )
}
export default User;