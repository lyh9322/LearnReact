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
        <button id="btn " onClick={(e) => this.btnClick()}>
          更改文本
        </button>
      </div>
    );
  }
  //   btnClick() {
  //     // this.state.message = "你好啊！地藏王菩萨";
  //     // =>   no mutate  react no know update 发生了变化
  //     this.setState({
  //       message: "你好啊！地藏王菩萨",
  //     });
  //     console.log(this.state.message);
  //   }
  //   //    性能优化 批量操作
  //   componentDidUpdate(prevProps, provState, snapshot) {
  //     console.log(this.state.message);
  //   }
  // 2、同步
  btnClick() {
    setTimeout(() => {
      this.setState({
        message: "你好啊,李银河",
      });
      console.log(this.state.message); // 你好啊,李银河
    }, 0);
  }
  //   componentDidMount() {
  //     const btnEl = document.getElementById("btn");
  //     btnEl.addEventListener("click", () => {
  //       this.setState({
  //         message: "你好啊,李银河",
  //       });
  //       console.log(this.state.message); // 你好啊,李银河
  //     });
  //   }
}
