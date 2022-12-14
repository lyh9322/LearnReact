import React, { Component } from "react";
class HYTestCpn extends Component {
  render() {
    return <h2>HYTestCpn</h2>;
  }

  componentWillUnmount() {
    console.log("HYTestCpn componentWillUnmount");
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("调用constructor方法");
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        {this.state.counter <= 5 && <HYTestCpn />}
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  componentDidMount() {
    console.log("调用componentDidMount方法");
  }

  componentDidUpdate() {
    console.log("调用componentDidUpdate方法");
  }

  componentWillUnmount() {
    console.log("调用componentWillUnmount方法");
  }
}
