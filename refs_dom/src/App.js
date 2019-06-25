import React, { Component } from 'react';
import './App.css';

class App extends Component {

  onClick=()=>{
    console.log('yayyy');
  }
  onKeyUpfunc=(target, e)=>{
    if(e.keyCode === 13){
      switch (target){
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
          break;
      }
    }
  
  }
  render() {
    return (
      <div className="App">
        <div>
          <span>Firstname:  </span>
          <input type="text" ref={(input)=>{this.firstName=input}} onKeyUp={this.onKeyUpfunc.bind(this, 'firstName')}></input>
        </div>
        <div>
          <span>LastName:  </span>
          <input type="text" ref={(input)=>{this.lastName=input}} onKeyUp={this.onKeyUpfunc.bind(this, 'lastName')}></input>
        </div>
        <div>
          <span>Age:  </span>
          <input type="text" ref={(input)=>{this.age=input}} onKeyUp={this.onKeyUpfunc.bind(this, 'age')}></input>
        </div>
        <div>
          <button value="submit" ref={(input)=>{this.submit=input}} onClick={this.onClick.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
