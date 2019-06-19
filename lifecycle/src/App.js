import React, {Component} from 'react';
import Child from './lifecycle/child'
import './App.css';

class App extends Component{
  constructor(){

    //can define state since its called once initially
    super();
    this.state={
      name: 'jophhn'
    }
    console.log('constructor');
  };
  componentWillMount(){
    if(window.innerWidth<500){
      this.setState({innerWidthValue: window.innerWidth});
    }
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  changeState(){
    this.setState({name: 'jill'});
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  unmount(){
    this.setState({name:'aa'});
  }
  render() {
    console.log('render');
    if(this.state.name ==='aa'){
      return (<div/>);
    }
    return (
      <div className="App">
      name: {this.state.name} | width: {this.state.innerWidthValue}
      <Child name={this.state.name}/>

      <button onClick={this.changeState.bind(this)}>Change State</button>
      <button onClick={this.unmount.bind(this)}>Unmount child</button>
      </div>
    );
  }
}

export default App;
