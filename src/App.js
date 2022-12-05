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

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <TopIntroduce />
          <Navbarmenu />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
              <Route path="resources" element={<Resources />} />
              {/* <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
