import React, { PureComponent } from "react";
class App extends PureComponent {
    state = {
        color: "purple"
    }
  render() {
      const pStyle = {
          color: "orange",
          textDecoration: "underline"
      }
    return (
      <div>
        <h2 style={{fontSize: "70px", color: this.state.color }}>title</h2>
        <p style={pStyle}>wenzi</p>
      </div>
    );
  }
}
export default App;
