import React, { PureComponent } from "react";

// function enhancePropsComponent(WrappedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return (
//         <div>
//           <WrappedComponent />
//         </div>
//       );
//     }
//   }
//   NewComponent.displayName = "why";
//   return NewComponent;
// }

function enhancePropsComponent(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent />;
  }
  return NewComponent;
}

class App extends PureComponent {
  render() {
    return <div>App</div>;
  }
}

const EnhancePropsComponent = enhancePropsComponent(App);

export default EnhancePropsComponent;
