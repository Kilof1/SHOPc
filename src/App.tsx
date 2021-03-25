import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/main/Main";

import "./App.scss";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
