import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FaAdjust } from "react-icons/fa";
import "../menu/TopIntroduce.css";

const TopIntroduce = () => {
  return (
    <>
      <div className="container">
        <div className="row top-header ">
          <div className=" text-center d-flex">
            <img src="" alt="" srcset="" />
            <p>
              JUST ANNOUNCED: Scale Forge - Create AI-generated product imagery
              in seconds
            </p>
            <p className="try-forge">
              Try Forge
              <FaAdjust />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopIntroduce;
