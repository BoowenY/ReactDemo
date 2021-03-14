import React, { PureComponent } from "react";
import Home from "./Home";
import Profile from "./Profile";
import styled, { ThemeProvider } from "styled-components";

const YButton = styled.button`
  padding: 10px 20px;
  color: green;
  background-color: black;
`;
//支持继承
const TButton = styled(YButton)`
  border-color: pink;
`;
class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: "orange", fontSize: "30px" }}>
        <Home />
        <hr />
        <Profile />
        <hr />
        <TButton>hahaa</TButton>
      </ThemeProvider>
    );
  }
}
export default App;
