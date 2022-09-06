import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav-tab">
        <div className="item left">{this.props.children[0]}</div>
        <div className="item center">{this.props.children[1]}</div>
        <div className="item right">{this.props.children[2]}</div>
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
        <NavBar>
          <div>返回</div>
          <div>购物街</div>
          <div>更多</div>
        </NavBar>
      </div>
    );
  }
}
