import React, { Component } from "react";

// 1、首先创造一个共享的容器
const UserContext = React.createContext();

// function ProfileHeader(value) {
//   return (
//     <div>
//       <h2>用户昵称:{value.nickname}</h2>
//       <h2>用户等级:{value.level}</h2>
//     </div>
//   );
// }
//  挂载在clas上的contextType属性会被重新赋值为一个由React.createContext()创建的Context对象
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称:{this.context.nickname}</h2>
        <h2>用户等级:{this.context.level}</h2>
      </div>
    );
  }
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
        <UserContext.Provider value={{ nickname: "why", level: "99" }}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    );
  }
}
