import React, { Component } from "react";

// 函数组件  因为没有构造方法所以没有this 没有生命周期 没有状态

function ChildCpn2(props) {
  const { name, age, height } = props;
  return (
    <div>
      <h2>我是函数式的子组件</h2>
      <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ChildCpn2 name="kobe" age="18" height="190" />
      </div>
    );
  }
}
