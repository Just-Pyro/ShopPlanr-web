import React, { useEffect, useRef, useState } from "react";
import SidebarLogo from "../assets/ShopPlanr-sidebar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faList,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ openMenu, closeMenu }) => {
  const plansTabs = ["/list", "/create", "/shopplan"];

  const menuRef = useRef(null);

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

  useEffect(() => {
    const windowSize = window.innerWidth;

    console.log("menuRef:", menuRef);
    if (windowSize < 768 && menuRef.current) {
      const sideBar = menuRef.current;

      if (openMenu) {
        sideBar.classList.add("bg-white");
        sideBar.classList.add("left-0");
      } else {
        sideBar.classList.remove("bg-white");
        sideBar.classList.remove("left-0");
      }
    }
  }, [openMenu]);

  const handleClose = () => {
    closeMenu(false);
  };

  return (
    <div ref={menuRef} className="sidebar">
      <div className={`absolute -right-7 ${!openMenu && "hidden"}`}>
        <div
          className="text-2xl font-black text-white cursor-pointer"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
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
