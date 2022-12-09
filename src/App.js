import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home";
import Navbarmenu from "./components/menu/Navbarmenu";
import TopIntroduce from "./components/introduce/TopIntroduce";
import Footer from "./components/Footer/footer";
import Resources from "./pages/Resources/Resources";
import MyCarousel from "./components/MyCarousel/MyCarousel";
import Company from "./pages/Company/Company";
import Conference from "./pages/Conference/Conference";
import Pricing from "./pages/Pricing/Pricing";
import Solutions from "./pages/Solutions/Solutions";
import Customers from "./pages/Customers/Customers";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <TopIntroduce />
          <Routes>
            <Route path="/" element={<Navbarmenu />}>
              <Route index element={<Home />} />
              <Route path="resources" element={<Resources />} />
              <Route path="pricing" element={<Pricing/>} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="customers" element={<Customers />} />
              <Route path="company" element={<Company />} />
              <Route path="conference" element={<Conference />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
