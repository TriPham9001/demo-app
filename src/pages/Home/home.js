import React from "react";
import "../Home/home.css";
import { mission_flag } from "../../assets/images/image";
export default function Home() {
  return (
    <div className="container banner">
      <div className="row">
        <img src={mission_flag} alt="" />
        <h1>Our mission is to accelerate the development of AI applications</h1>
      </div>
    </div>
  );
}
