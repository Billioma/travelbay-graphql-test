import React from "react";
import { chat, logo } from "../../assets/exports";
import {
  accounts,
  activeStyle,
  general,
} from "../../components/common/constants";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col w-[287px] min-h-screen justify-between fixed z-[5] bg-white border-r border-r-[#e0e0e0]">
      <div className="flex flex-col min-h-screen">
        <div className="flex px-[20px] pt-[15px] border-b border-b-[#e0e0e0] items-center justify-between">
          <img src={logo} alt="logo" className="w-[180px] h-[80px]" />
        </div>

        <div className="flex-1">
          <div className="mx-[20px] mt-[15px]">
            <div className="mb-[10px] text-[14px] font-bold text-[#4F4F4F]">
              Profile
            </div>
            {general?.map((item, i) => (
              <div
                key={i}
                className="hover:bg-[#F1F5FE] hover:mx-[-20px] hover:px-[20px]"
              >
                <NavLink
                  to={item.path}
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle }
                      : {
                          ...activeStyle,
                          backgroundColor: "",
                          fontWeight: 400,
                          borderRight: "",
                        }
                  }
                >
                  <img
                    alt="icon"
                    className="mr-[11px]"
                    src={location.pathname === item.path ? item.sec : item.icon}
                  />
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="mt-[25px] mx-[20px]">
            <div className="mb-[10px] text-[12px] font-[500] text-[#4F4F4F]">
              ACCOUNT
            </div>
            {accounts?.map((item, i) => (
              <div
                key={i}
                className="hover:bg-[#F1F5FE] hover:mx-[-20px] hover:px-[20px]"
              >
                <NavLink
                  to={item.path}
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle }
                      : {
                          ...activeStyle,
                          backgroundColor: "",
                          fontWeight: 400,
                          borderRight: "",
                        }
                  }
                >
                  <img
                    alt="icon"
                    className="mr-[11px]"
                    src={location.pathname === item.path ? item.sec : item.icon}
                  />
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="flex text-white bg-[#2463EB] mx-[20px] px-[18px] py-[15px] bg-blue cursor-pointer mb-[43px] gap-[6px] rounded-[20px] shadow-2xl">
          <img src={chat} alt="chat" />
          <span className="text-[20px] font-[500]">CHAT SUPPORT</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
