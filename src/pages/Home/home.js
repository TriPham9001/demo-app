import React from "react";
import "../Home/home.css";
import { Accel, Adn, Air, Amy, Aurora, Balance, Bank, Brex, Coatue, Combinatoe, Compass, Dragoneer, Durable, Etsy, Flag, Flexport, Founders, Globe, Gm, Greenoaks, Indexventures, Instacart, Linkedin, Loudspeaker, Lumunar, Lyft, Medal, mission_flag, Nuro, Nvdia, Openai, Padlock, Paypal, Persons, Pinterest, Robot, Samsung, Sap, Scailnew_1, Scailnew_2, Scailnew_3, Skydio, Sparkcapital, Square, Stock, Tgerglobal, Thrivecapital, Toyota, Us, Video, Wellington, Zoox } from "../../assets/images/image";
import { BsArrowRight } from "react-icons/bs";
import MyCarousel from "../../components/MyCarousel/MyCarousel";

export default function Home() {
  return (
    <>
      <div className="font-Inter">
        <div className="container banner">
          <div className="row">
            <div className="col-lg-12">
              <img src={mission_flag} alt="" />
            </div>
            <div className="col-lg-12">
              <h1>Our mission is to accelerate the development of AI applications</h1>
            </div>
          </div>
        </div>
        <div className="container headquarters">
          <div className="row headquarters-accept-cookie">
            <div className="col-lg-7">
              <p>This website uses cookies and similar technologies to ensure
                functionality, evaluate website usage, and to serve marketing content.
                Visit our
                <a className="accept-cookie-link" href="#/">
                  Cookie Policy
                </a> and <a className="accept-cookie-link" href="#/">
                  Privacy Policy
                </a> for more information.
              </p>
            </div>
            <div className="col-lg-5 text-center headquarters-btn ">
              <button type="button" className="btn">
                Cookie Preferences
              </button >
              <button type="button" className="btn">
                Reject Cookies
              </button >
              <button type="button" className="btn btn-my-custom">
                Accept Cookies
              </button>
            </div>
          </div>
          <div className="row text-center headquarters-txt">
            <div className="headquarters-txt-sfran">
              <h1>San Francisco</h1>
              <p>HEADQUARTERS</p>
            </div>
            <div className="headquarters-txt-number">
              <div className="one-txt-number">
                <h1>600</h1>
                <p>EMPLOYEES</p>
              </div>
              <div className="one-txt-number">
                <h1>$603M</h1>
                <p>INVESTMENT</p>
              </div>
              <div className="one-txt-number">
                <h1>2016</h1>
                <p>FOUNDED</p>
              </div>
            </div>
          </div>
          <div className="row animation">
            <div className="d-flex animation-txt ">
              <p className="big-txt">
                7.7B
              </p>
              <p>
                <span>Annotations</span> To Date
              </p>
              <p className="big-txt">
                1B+
              </p>
              <p>
                <span>2D and 3D</span> Scenes Labeled
              </p>
            </div>
          </div>
          <div className="row video">
            <img src={Video} alt="" />
          </div>
        </div>
        <div className="container-fluid carousel">
          {/* <div className="carousel-box"> */}
    <MyCarousel/>
          {/* </div> */}
        </div>
        <div className="container my-btn">
          <button type="button" className="btn my-custom">Scale is growing. Grow with us <BsArrowRight /></button>
        </div>
        <div className="customers">
          <div className="container">
            <div className=".row">
              <h1>Customers</h1>
              <p>We are proud to be trusted by leading companies to
                provide a data-centric, end-to-end solution to manage
                the entire ML lifecycle. Combining cutting edge
                technology with operational excellence, we help
                teams develop the highest-quality datasets because
                better data → better AI.</p>
              <div className="customers-brands">
                <img src={Air} alt="logo-brands" />
                <img src={Amy} alt="logo-brands" />
                <img src={Aurora} alt="logo-brands" />
                <img src={Brex} alt="logo-brands" />
                <img src={Etsy} alt="logo-brands" />
                <img src={Flexport} alt="logo-brands" />
                <img src={Gm} alt="logo-brands" />
                <img src={Instacart} alt="logo-brands" />
                <img src={Linkedin} alt="logo-brands" />
                <img src={Lumunar} alt="logo-brands" />
                <img src={Lyft} alt="logo-brands" />
                <img src={Nuro} alt="logo-brands" />
                <img src={Nvdia} alt="logo-brands" />
                <img src={Openai} alt="logo-brands" />
                <img src={Paypal} alt="logo-brands" />
                <img src={Pinterest} alt="logo-brands" />
                <img src={Robot} alt="logo-brands" />
                <img src={Samsung} alt="logo-brands" />
                <img src={Sap} alt="logo-brands" />
                <img src={Skydio} alt="logo-brands" />
                <img src={Square} alt="logo-brands" />
                <img src={Toyota} alt="logo-brands" />
                <img src={Us} alt="logo-brands" />
                <img src={Zoox} alt="logo-brands" />
              </div>
              <div className="container my-btn">
                <button className="btn my-custom">Meet Our Customers <BsArrowRight /></button>
              </div>
            </div>
          </div>
        </div>


        <div className="investors">
          <div className="container">
            <h1>Our Investors</h1>

            <div className="row investors-brands">

              <div className="col-lg-3">
                <img src={Accel} alt="logo-brands" />
                <img src={Greenoaks} alt="logo-brands" />
                <img src={Wellington} alt="logo-brands" />

              </div>
              <div className="col-lg-3">
                <img src={Coatue} alt="logo-brands" />
                <img src={Sparkcapital} alt="logo-brands" />
                <img src={Indexventures} alt="logo-brands" />


              </div>
              <div className="col-lg-3">
                <img src={Durable} alt="logo-brands" />
                <img src={Thrivecapital} alt="logo-brands" />
                <img src={Combinatoe} alt="logo-brands" />


              </div>
              <div className="col-lg-3">
                <img src={Founders} alt="logo-brands" />
                <img src={Tgerglobal} alt="logo-brands" />
                <img src={Dragoneer} alt="logo-brands" />

              </div>

            </div>

            <div className="container my-btn">
              <button className="btn my-custom">Meet Our Customers <BsArrowRight /></button>
            </div>
          </div>
        </div>
        <div className="scalenew">
          <div className="container">
            <h1>Scale In The News</h1>
            <div className="row">
              <div className="col-lg-4">
                <div className="one-scalenew">
                  <img src={Scailnew_1} alt="img-scalenew" />
                  <p>Wall Street Journal</p>
                  <h5>Scale AI’s Rapid Growth Reflects Widening Demand for Smart Software</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="one-scalenew">
                  <img src={Scailnew_2} alt="img-scalenew" />
                  <p>Fortune</p>
                  <h5>Data-labeling company Scale AI valued at $7.3 billion with new funding</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="one-scalenew">
                  <img src={Scailnew_3} alt="img-scalenew" />
                  <p>Forbes cloud 100</p>
                  <h5>A funding frenzy helped catapult 34 new companies onto the list and boost their combined</h5>
                </div>
              </div>
            </div>
            <div className="scalenew-txt">
              <p>Get in touch with our PR team by emailing:</p>
              <p className="txt-a-com">
                @.com <BsArrowRight className="icon" />
              </p>
            </div>
          </div>
        </div>

        <div className="container careers" >
          <div className="row">
            <div className="col-lg-12">
              <h1>Careers</h1>
              <p>Join us as we continue to accelerate the development of AI applications.</p>
              <h5>Learn More About Careers at Scale <BsArrowRight className="icon" /></h5>
            </div>
          </div>
          <div className="row careers-group-icon text-center">
            <h3>Open Roles</h3>
            <div className="col-lg-12 d-flex careers-list-icon">
              <div className="careers-one-icon">
                <img src={Globe} alt="icon" />
                <p>Business Operations</p>
              </div>
              <div className="careers-one-icon">
                <img src={Compass} alt="icon" />
                <p>Design</p>
              </div>
              <div className="careers-one-icon">
                <img src={Adn} alt="icon" />
                <p>Engineering</p>
              </div>
              <div className="careers-one-icon">
                <img src={Globe} alt="icon" />
                <p>Enterprise AI</p>
              </div>
              <div className="careers-one-icon">
                <img src={Globe} alt="icon" />
                <p>Executive</p>
              </div>
              <div className="careers-one-icon">
                <img src={Flag} alt="icon" />
                <p>Federal</p>
              </div>
              <div className="careers-one-icon">
                <img src={Bank} alt="icon" />
                <p>Finance</p>
              </div>

              <div className="careers-one-icon careers-icon-row ">
                <img src={Stock} alt="icon" />
                <p>GTM</p>
              </div>
              <div className="careers-one-icon">
                <img src={Balance} alt="icon" />
                <p>Legal & Compliance</p>
              </div>
              <div className="careers-one-icon">
                <img src={Loudspeaker} alt="icon" />
                <p>Marketing</p>
              </div>
              <div className="careers-one-icon">
                <img src={Medal} alt="icon" />
                <p>Operations</p>
              </div>
              <div className="careers-one-icon">
                <img src={Persons} alt="icon" />
                <p>People</p>
              </div>
              <div className="careers-one-icon">
                <img src={Globe} alt="icon" />
                <p>Product</p>
              </div>
              <div className="careers-one-icon">
                <img src={Padlock} alt="icon" />
                <p>Security</p>
              </div>
              <div className="careers-one-icon justify-content-end">
                <img src={Globe} alt="icon" />
                <p>Supply Operations</p>
              </div>

            </div>
          </div>
        </div>

        <div className="box-get-started">
          <div className="container get-started" >
            <div className="row">
              <div className="col-lg-12">
                <h1>Get Started Today</h1>

                <div className="my-btn">
                  <button className="btn my-custom">Get Started <BsArrowRight /></button>
                  <button className="btn my-custom-default">Talk To Sales</button>

                </div>

              </div>
            </div>
          </div>


        </div>


      </div>
    </>
  );
}
