import React, { Component } from "react";
//1、导入events 生成 eventemitter对象 eventBus
import { EventEmitter } from "events";
// 2、
const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.btnClick()}>按钮</button>
      </div>
    );
  }
  btnClick() {
    eventBus.emit("headerClick", "why", 18);
  }
}
class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    eventBus.addListener("headerClick", this.headerClick);
  }

  headerClick(name, age) {
    console.log(name, age);
  }

  componentWillUnmount() {
    eventBus.removeListener("headerClick", this.headerClick);
  }

  render() {
    return (
      <div>
        <Profile />
        <h2>其他内容</h2>
      </div>
    );
  }
}
