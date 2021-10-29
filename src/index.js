import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Background from "./components/BackGround/Background";

ReactDOM.render(
  <Background>
    <App />
  </Background>,
  document.getElementById("root")
);
