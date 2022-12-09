import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
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
                <Link to="/" className="txt-navbar">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/customers" className="">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/company" className="">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/conference" className="">
                  Conference
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 navbar-right mt-4">
            <ul className="d-flex">
              <li>
                <Link to="/" className="">
                  Talk to Sales
                </Link>
              </li>
              <li>
                <Link to="#" className="">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbarmenu;
