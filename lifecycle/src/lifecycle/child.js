import React, {Component} from 'react';

class Child extends Component{
  constructor(){

    //can define state since its called once initially
    super();
    console.log('child constructor');
  };
  componentWillMount(){
    if(window.innerWidth<500){
      this.setState({innerWidthValue: window.innerWidth});
    }
    console.log('child componentWillMount');
  }
  componentDidMount(){
    console.log('child componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('chhild componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState){
    console.log('child prevProps:', prevProps);
    console.log('child prevState:', prevState);
    console.log('child componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }
  render() {
    console.log('child render');
    return (
      <div className="App">
      name:{this.props.name}
      </div>
    );
  }
}

export default Child;
