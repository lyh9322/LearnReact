import React, { PureComponent } from "react";

function enhanceRegionComponent(WrappedComponent) {
  return (props) => <WrappedComponent {...props} region='中国'/>;
}

class About extends PureComponent {
  render() {
    const { name, age , region} = this.props;
    return (
      <div>
        <h2>{`昵称:${name} + 年龄:${age} + 地区:${region}`}</h2>
      </div>
    );
  }
}

const EnhanceAbout = enhanceRegionComponent(About);

class Home extends PureComponent {
  render() {
    const { name, age,region } = this.props;
    return (
      <div>
        <h2>{`昵称:${name} + 年龄:${age}+ 地区:${region}`}</h2>
      </div>
    );
  }
}
const EnhanceHome = enhanceRegionComponent(Home);

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="why" age="18" />
        <EnhanceAbout name="what" age="28" />
      </div>
    );
  }
}

const EnhanceRegionComponent = enhanceRegionComponent(App);
export default EnhanceRegionComponent;
