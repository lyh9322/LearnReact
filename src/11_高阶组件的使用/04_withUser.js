import React, { PureComponent, createContext } from "react";

const UserContext = createContext({
  nickname: "what",
  weight: "75",
  level: 0,
});
function withUser(WrapperCpn){
    return props=>{
        return(
            <UserContext.Consumer>
                {
                    value=>{
                        return <WrapperCpn {...props}{...value}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}
function Header(props) {
  const { nickname, weight,level } = props;
  return <h2>{"昵称:" + nickname + "体重:" + weight + "等级:" + level}</h2>;
}
function Footer(props) {
  const { nickname, weight ,level} = props;
  return <h2>{"昵称:" + nickname + "体重:" + weight + "等级:" + level}</h2>;
}
const UserHeader = withUser(Header);
const UserFooter = withUser(Footer);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ nickname: "why", weight: "50", level: "99" }}
        >
          <UserHeader />
          <UserFooter />
        </UserContext.Provider>
      </div>
    );
  }
}
