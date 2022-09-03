import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "what", age: 20, height: 1.76 },
        { name: "lucy", age: 18, height: 1.65 },
        { name: "tom", age: 30, height: 1.78 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                <span>{`姓名:${item.name} 年龄: ${item.age}`}</span>
                <button onClick={(e) => this.incrementAge(index)}>
                  年龄+1
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertFriend()}>添加新数据</button>
      </div>
    );
  }

  //   insertFriend() {
  //     this.state.friends.push({ name: "why", age: 18, height: 1.88 });
  //     this.setState({
  //       friends: this.state.friends,
  //     });
  //   }
  insertFriend() {
    this.setState({
      friends: [...this.state.friends, { name: "why", age: 18, height: 1.88 }],
    });
  }

  //   incrementAge(index) {
  //     this.state.friends[index].age += 1;
  //     this.setState({
  //       friends: this.state.friends,
  //     });
  //   }
  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}
