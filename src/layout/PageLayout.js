import React from "react";
import SideBar from "./AuthLayout/SideBar";
import SideBarr from "./NonAuthLayout/SideBarr";
import Header from "./AuthLayout/Header";

export const AuthLayout = ({ children }) => {
  return (
    <div className="relative bg-[#f5f6fa] text-black">
      <div className="min-h-screen">
        <Header />
        <SideBar />
        <div className="w-full pt-[220px] pl-[320px] pr-[50px] pb-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export const NonAuthLayout = ({ children }) => {
  return (
    <div className="text-black bg-white relative">
      <div className="flex min-h-screen">
        <SideBarr />
        <div className="px-[80px] overflow-y-auto w-[50%] pb-[100px] pt-[35px]">
          {children}
        </div>
      </div>
    </div>
  );
};
