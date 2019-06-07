import React, {Component} from 'react';
import User from './User'

class Users extends Component{
    state = {
        users :[
            {
                name: 'A',
                age: 10,
                id: '1'
            },
            {
                name: 'B',
                age: 20,
                id: '2'
            },
            {
                name: 'C',
                age: 20,
                id: '3'
            },
            {
                name: 'D',
                age: 20,
                id: '4'
            },
            {
                name: 'E',
                age: 20,
                id: '5'
            }
        ]
    };
    reduceAge = () =>{
        const newState =this.state.users.map((user)=>{
            return user.age -=1;
        });
        this.setState(newState);
    };
    increaseAge=()=> {
        const newState = this.state.users.map((user)=>{
            return user.age +=1;
        });
        this.setState(newState);
    };
    changeName=(index, event)=>{
        const users = Object.assign([], this.state.users);
        const user = users[index]
        user.name = event.target.value;
        this.setState({users:users});
    };
    deleteUser=(index)=>{
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({users:users});
        
    };
    render(){
        return(
           <div>
            <br></br>
            <h2>State, props and event test</h2>
            <button onClick={this.reduceAge}> Reduce Age</button>
            <button onClick={this.increaseAge}> Increase Age</button>
            {
                this.state.users.map((user)=>{
                    return <User key={user.id}>Name: {user.name} | Age: {user.age}</User>
                })
            }

            <hr></hr>
            <br></br>
            <h2>List Test</h2>
            <ul>
                {
                    this.state.users.map((user, index)=>{
                        return (  <User 
                            key={user.id} 
                            deleteUser={this.deleteUser.bind(this, index)} 
                            changeName={this.changeName.bind(this, index)}>Name: {user.name} | Age: {user.age}</User>)
                    })
                }
            </ul>

           </div>
        )
    }
}
export default Users