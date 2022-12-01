import React from "react";
import "../Home/home.css";
import { Accel, Air, Amy, Aurora, Brex, Coatue, Combinatoe, Dragoneer, Durable, Etsy, Flexport, Founders, Gm, Greenoaks, Indexventures, Instacart, Linkedin, Lumunar, Lyft, mission_flag, Nuro, Nvdia, Openai, Paypal, Pinterest, Robot, Samsung, Sap, Skydio, Sparkcapital, Square, Tgerglobal, Thrivecapital, Toyota, Us, Video, Wellington, Zoox } from "../../assets/images/image";
import { Arrow_right } from "../../assets/svg/icon";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
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
            <p>This website uses cookies and similar technologies to ensure functionality, evaluate website usage, and to serve marketing content. Visit our <a className="accept-cookie-link">Cookie Policy</a> and <a className="accept-cookie-link">Privacy Policy</a> for more information.</p>
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
          <img src={Video} />
        </div>
      </div>
      <div className="container-fluid carousel">
        <div className="carousel-box">

        </div>
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
              <img src={Air} />
              <img src={Amy} />
              <img src={Air} />
              <img src={Aurora} />
              <img src={Brex} />
              <img src={Etsy} />
              <img src={Flexport} />
              <img src={Gm} />
              <img src={Instacart} />
              <img src={Linkedin} />
              <img src={Lumunar} />
              <img src={Lyft} />
              <img src={Nuro} />
              <img src={Nvdia} />
              <img src={Openai} />
              <img src={Paypal} />
              <img src={Pinterest} />
              <img src={Robot} />
              <img src={Samsung} />
              <img src={Sap} />
              <img src={Skydio} />
              <img src={Square} />
              <img src={Toyota} />
              <img src={Us} />
              <img src={Zoox} />
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
              <img src={Accel} />
              <img src={Greenoaks} />
              <img src={Wellington} />

            </div>
            <div className="col-lg-3">
              <img src={Coatue} />
              <img src={Sparkcapital} />
              <img src={Indexventures} />


            </div>
            <div className="col-lg-3">
              <img src={Durable} />
              <img src={Thrivecapital} />
              <img src={Combinatoe} />


            </div>
            <div className="col-lg-3">
              <img src={Founders} />
              <img src={Tgerglobal} />
              <img src={Dragoneer} />

            </div>

          </div>
          <div className="container my-btn">
            <button className="btn my-custom">Meet Our Customers <BsArrowRight /></button>
          </div>
        </div>
      </div>
    </>
  );
}
