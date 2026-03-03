import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MainWrapper = ({ children, backdrop = false }) => {
  return (
    <>
      {backdrop && (
        <div className="absolute top-0 left-0 z-10 bg-black/50 w-full h-full"></div>
      )}
      <div className={`main-content-wrapper`}>{children}</div>
    </>
  );
};

export default MainWrapper;
