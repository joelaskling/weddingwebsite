import React from "react";
import Main from "./Components/Main";
import Nav from "./Components/NavigationPage/NavigationPage";

function App() {
  return (
    <div style={{ height: "800px", width: "auto",position: "relative" }}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
