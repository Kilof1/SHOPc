import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/main/Main";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default App;
