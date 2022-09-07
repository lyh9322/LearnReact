import React, { PureComponent, createContext } from "react";
const UserContext = createContext({
  nickname: "默认",
  level: 0,
  区域: "中国",
});
function Header(props) {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { nickname, level, region } = value;
        return (
          <h2>
            Header{"昵称:" + nickname + "等级:" + level + "区域:" + region}
          </h2>
        );
      }}
    </UserContext.Consumer>
  );
}

function Footer(props) {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { nickname, level, region } = value;
        return (
          <h2>
            Footer{"昵称:" + nickname + "等级:" + level + "区域:" + region}
          </h2>
        );
      }}
    </UserContext.Consumer>
  );
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ nickname: "why", level: "90", region: "中国" }}
        >
          <Header />
          <Footer />
        </UserContext.Provider>
      </div>
    );
  }
}
