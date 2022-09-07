import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleE1 = null;
  }
  render() {
    return (
      <div>
        <h2 ref="title">第一种 this.refs.传递属性</h2>
        <h2 ref={this.titleRef}>createRef</h2>
        <h2 ref={(element) => (this.titleE1 = element)}>Callback Ref</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }
  changeText() {
    this.refs.title.innerHTML = "你好啊！地藏王菩萨";
    this.titleRef.current.innerHTML = "你好啊！普贤菩萨";
    this.titleE1.innerHTML = "你好啊！ 观世音菩萨";
  }
}
