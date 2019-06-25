import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User=(params)=>{
  return (<h2>Welcome User {params.username}</h2>);
}

class App extends Component {
  state={
    loggedin: false
  }
  loginHandle = ()=>{
    this.setState(prevState=>({
      loggedin: !prevState.loggedin
    }))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
            <li><NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink></li>
            <li><NavLink to="/user/john" exact activeStyle={{color:'green'}}>User John</NavLink></li>
            <li><NavLink to="/user/peter" exact activeStyle={{color:'green'}}>User Peter</NavLink></li>
          </ul>

          <Prompt
            when={!this.state.loggedin}
            message={(location)=>{
              return  location.pathname.startsWith('/user') ? "Login please" : true;
              } 
            }
          />
          <button onClick={this.loginHandle.bind(this)}>{this.state.loggedin?'Logout':'Login'}</button>
          
          <Route path="/" exact strict render={
            ()=>{
              return (<h1>Welcome Home</h1>)
            }
          } />
          <Route path="/about" exact strict render={
            ()=>{
              return (<h1>Welcome About</h1>)
            }
          } />
          <Route path="/user/:username" exact strict render={({match})=>(
              this.state.loggedin ? (<User username={match.params.username} />) : (<Redirect to='/' />)
           )} />
        </div>
      </Router>
      
    );
  }
}

export default App;
