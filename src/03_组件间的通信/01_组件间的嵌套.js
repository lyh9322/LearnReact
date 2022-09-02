import React, { Component } from "react";
function Banner() {
  return (
    <div>
      <h2>我是Banner</h2>
    </div>
  );
}

function ProductList() {
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
function Header() {
  return (
    <div>
      <h2>我是header</h2>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h2>我是Footer</h2>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
