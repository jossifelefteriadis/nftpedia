import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Navbar />
        <PageContainer />
      </section>
    </BrowserRouter>
  );
}

export default App;
