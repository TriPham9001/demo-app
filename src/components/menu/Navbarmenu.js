import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { Logo_name } from "../../assets/images/image";
  import "../menu/Navbarmenu.css";

const Navbarmenu = () => {
  return (
    <>
      <div className="container nabar pb-3">
        <div className="row">
          <div className="col-sm-2 mt-4">
            <img src={Logo_name} className="logo-name" />
          </div>
          <div className="col-lg-8 navbar-center mt-4">
            <ul className="d-flex">
              <li>
                <a href="/" className="">
                  Products
                </a>
              </li>
              <li>
                <a href="" className="">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/resources" className="">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Conference
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 navbar-right mt-4">
            <ul className="d-flex">
              <li>
                <a href="/" className="">
                  Talk to Sales
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarmenu;
