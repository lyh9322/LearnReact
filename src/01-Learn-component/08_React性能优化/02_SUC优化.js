import React, { Component } from "react";

function Header() {
  console.log("Header Render 被调用");
  return <h2>Header</h2>;
}

class Main extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

function Banner() {
  console.log("Banner Render 被调用");
  return <div>Banner</div>;
}

function ProductList() {
  console.log("ProductList Render 被调用");
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
}

function Footer() {
  console.log("Footer Render 被调用");
  return <h2>Footer</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }
  render() {
    console.log("App Render 被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "你好啊,李银河",
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter !== this.state.counter) {
      return true;
    }

    return false;
  }
}
