import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
  //counter 3
  increment() {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
  }

  //   多数据合并 => 1
  //   increment() {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   }
}
