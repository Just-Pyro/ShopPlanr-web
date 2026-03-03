import React, { useEffect } from "react";
import SidebarLogo from "../assets/ShopPlanr-sidebar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const plansTabs = ["/list", "/create", "/shopplan"];

  useEffect(() => {
    if (plansTabs.includes(window.location.pathname)) {
      document.querySelectorAll(".sidetabs a>div")[0].classList.add("active");
      document
        .querySelectorAll(".sidetabs a>div")[1]
        .classList.remove("active");
    } else {
      document.querySelectorAll(".sidetabs a>div")[1].classList.add("active");
      document
        .querySelectorAll(".sidetabs a>div")[0]
        .classList.remove("active");
    }
  }, [window.location.pathname]);
  return (
    <div className="sidebar">
      <img src={SidebarLogo} alt="" srcset="" />

      <div className="sidetabs">
        <Link to="/list" className="hover:opacity-75 transition-all ease-in">
          <div className="flex gap-3 text-xl px-5 py-3">
            <div>
              <FontAwesomeIcon icon={faList} />
            </div>
            <p className="flex-1">Plans</p>
          </div>
        </Link>
        <Link
          to="/settings"
          className="hover:opacity-75 transition-all ease-in"
        >
          <div className="flex gap-3 text-xl px-5 py-3">
            <div>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <p className="flex-1">Settings</p>
          </div>
        </Link>
      </div>

      <Link to="/" className="hover:opacity-85 transition-all ease-in">
        <div className="flex gap-3 text-xl px-5 py-3 text-emphasis">
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
          <p className="flex-1">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
