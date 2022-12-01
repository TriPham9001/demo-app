import { Outlet, Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "../introduce/TopIntroduce.css";
import { Logo } from "../../assets/images/image";
const TopIntroduce = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="top-header text-center d-flex">
          <img src={Logo} className="img_Logo" />
          <p>
            JUST ANNOUNCED: Scale Forge - Create AI-generated product imagery in
            seconds
          </p>
          <p className="try-forge">
            Try Forge
            <BsArrowRightShort />
          </p>
        </div>
      </div>
    </>
  );
};

export default TopIntroduce;
