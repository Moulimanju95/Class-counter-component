import { Component } from "react";
import React from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 10 };

   /* console.log('props data',props);
    */
    
  }

increment = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1,
    }));
};

decrement = () => {
    this.setState((prevState) => ({
        count: prevState.count - 1,
    }));
};

reset = () => {
    this.setState({
        count:0,
    });
};

render(){

    /* const {name,subject} = this.props; */
    const displayCounter = this.state.count < 0 ? 0 : this.state.count;
    return(
        <div>
        <h1> Counter: {displayCounter}</h1>
        
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>

       {/*  <p>Name : {this.props.name} </p>
        <p>Subject : {this.props.subject}</p> */}

      </div>
    );
}
}
export default Counter;
