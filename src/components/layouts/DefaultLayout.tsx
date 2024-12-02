import React from "react";
import SideMenu from "../SideMenu";
import AppSideMenu from "../app-side-menu/AppSidebar";

const DefaultLayout: React.FC = () => {
  return (
    <div className="bg pt-4 ps-2">
      <div className="d-flex">
        <AppSideMenu></AppSideMenu>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
};

export default DefaultLayout;
