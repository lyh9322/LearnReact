import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.counterRef = createRef();
  }
  render() {
    return (
      <div>
        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.increment()}>app+1</button>
      </div>
    );
  }
  increment() {
    this.counterRef.current.increment();
  }
}
