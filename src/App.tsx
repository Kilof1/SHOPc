import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/main/Main";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
