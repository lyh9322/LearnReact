import React, { Component } from "react";

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称:{props.nickname}</h2>
      <h2>用户等级:{props.level}</h2>
    </div>
  );
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader
          nickname={this.props.nickname}
          level={this.props.level}
        />
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
  constructor(props) {
    super(props);
    this.state = {
      nickname: "自在轻安",
      level: 99,
    };
  }
  render() {
    const { nickname, level } = this.state;
    return (
      <div>
        <Profile nickname={nickname} level={level} />
        <h2>其他内容</h2>
      </div>
    );
  }
}
