import React, { useEffect, useState } from "react";
import SideBar from "./AuthLayout/SideBar";
import SideBarr from "./NonAuthLayout/SideBarr";
import Header from "./AuthLayout/Header";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../services/mutation";

export const AuthLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { loading } = useQuery(GET_USER);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-[#f5f6fa] text-black">
      {loading ? (
        <div className="flex justify-center min-h-screen items-center">
          <div className="loading" />
        </div>
      ) : (
        <div className="min-h-screen">
          <Header showSidebar={showSidebar} />
          {showSidebar && <SideBar />}
          <div
            className={`w-full ${showSidebar ? "pt-[130px]" : "pt-[120px]"} ${
              showSidebar ? "pl-[320px]" : "px-[30px]"
            } pr-[50px] pb-5`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const NonAuthLayout = ({ children }) => {
  return (
    <div className="text-black bg-white relative">
      <div className="flex lg:flex-row sm:flex-col min-h-screen">
        <SideBarr />
        <div className="sm:px-[40px] lg:px-[80px] overflow-y-auto lg:w-[50%] sm:w-full pb-[100px] pt-[35px]">
          {children}
        </div>
      </div>
    </div>
  );
};
