import React, { PureComponent } from "react";

function enHance(Comp) {
  return (props) => {
    return <Comp {...props} region="China" />;
  };
}
class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home{" "}
        {`昵称：${this.props.name},年龄：${this.props.age}, ${this.props.region}`}
      </h2>
    );
  }
}
class About extends PureComponent {
  render() {
    return <h2>About {`昵称：${this.props.name},年龄：${this.props.age}`}</h2>;
  }
}
const EnhanceHome = enHance(Home);
class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome />
      </div>
    );
  }
}
export default App;
