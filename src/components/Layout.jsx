import React from "react";
import AuthWrapper from "./AuthWrapper";
import Sidebar from "./Sidebar";
import MainWrapper from "./MainWrapper";

const Layout = ({ children }) => {
  return (
    <AuthWrapper>
      <Sidebar />
      <MainWrapper>
        <div className="inner-content bg-surface">{children}</div>
      </MainWrapper>
    </AuthWrapper>
  );
};

export default Layout;
