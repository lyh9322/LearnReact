import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.btnClick()}>更改文本</button>
      </div>
    );
  }
  btnClick() {
    // this.state.message = "你好啊！地藏王菩萨";
    // =>   no mutate  react no know update 发生了变化
    this.setState({
      message: "你好啊！地藏王菩萨",
    });
  }
}
