import React, { Component } from "react";

//子组件

class ChildCpn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.props = props;
  }
  render() {
    const { name, age, height } = this.props;
    return (
      <div>
        <h2>我是子组件</h2>
        <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
   
  }
  
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="184" />
      </div>
    );
  }
}
