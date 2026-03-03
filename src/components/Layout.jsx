import React, { useState } from "react";
import AuthWrapper from "./AuthWrapper";
import Sidebar from "./Sidebar";
import MainWrapper from "./MainWrapper";
import ResponsiveHeader from "./ResponsiveHeader";

const Layout = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthWrapper>
      <Sidebar openMenu={isOpen} closeMenu={openSidebar} />
      <MainWrapper backdrop={isOpen}>
        <ResponsiveHeader openSidebar={openSidebar} />
        <div className={`inner-content bg-surface ${className}`}>
          {children}
        </div>
      </MainWrapper>
    </AuthWrapper>
  );
};

export default Layout;
