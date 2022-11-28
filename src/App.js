import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home";
import Navbarmenu from "./components/menu/Navbarmenu";
import TopIntroduce from "./components/introduce/TopIntroduce";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopIntroduce />
        <Navbarmenu/>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
