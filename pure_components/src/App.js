import React, {Component, PureComponent} from 'react';
import './App.css';

const Temp = (props)=>{
  console.log('Temp');
  return (
    <div>{props.val}</div>
  )
}

class App extends PureComponent {
  state = {
    val:1
  }
  componentDidMount(){
    console.log('TecomponentDidMountmp');
    setInterval(()=>{
      this.setState({val:1});
    }, 2000)
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldCompoenentUpdate');
  //   return nextState.val === this.state.val ? false:true;
  // }
  render(){
    console.log('render');
    return (
      <div className="App">
        <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default App;
