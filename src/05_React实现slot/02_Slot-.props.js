import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div className="nav-bar">
        <div className="item left">{leftSlot}</div>
        <div className="item center">{centerSlot}</div>
        <div className="item right">{rightSlot}</div>
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
    const navLeft = <div>返回</div>;
    const navCenter = <div>购物街</div>;
    const navRight = <div>更多</div>;
    return (
      <NavBar leftSlot={navLeft} centerSlot={navCenter} rightSlot={navRight} />
    );
  }
}
