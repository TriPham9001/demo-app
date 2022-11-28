import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import Navbarmenu from "./components/menu/Navbarmenu";
import TopIntroduce from "./components/menu/TopIntroduce";

function App() {
  return (
    <BrowserRouter>
      <TopIntroduce />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
