import React, { Component } from "react";

// 1、首先创造一个共享的容器
const UserContext = React.createContext();
function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>用户昵称:{value.nickname}</h2>
              <h2>用户等级:{value.level}</h2>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
//3.
ProfileHeader.contextType = UserContext;

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
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* 2、使用这个组件 userContext.provider value */}
        <UserContext.Provider value={{ nickname: "what", level: "99" }}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    );
  }
}
