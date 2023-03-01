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
    <div className="flex flex-col justify-between fixed z-[5] bg-white border-r border-r-[#e0e0e0]">
      <div>
        <div className="flex px-[20px] pt-[35px] border-b border-b-[#e0e0e0] items-center justify-between pb-[35px]">
          <div className="flex gap-13px] items-center">
            <img src={logo} alt="logo" />
            <span>Edupali</span>
          </div>
          <div className="px-[12px] py-[5px] bg-[#E8EEFD] rounded-full">
            <span>School Portal</span>
          </div>
        </div>

        <div className="mx-[20px]">
          <span className="mb-[10px] text-[12px] font-[500] text-[#4F4F4F]">
            GENERAL
          </span>
          {general?.map((item, i) => (
            <div
              key={i}
              // _hover={{ backgroundColor: "semiBlue", px: "20px", mx: "-20px" }}
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

        <div className="mb-[140px] mt-[40px] mx-[20px]">
          <span className="mb-[10px] text-[12px] font-[500] text-[#4F4F4F]">
            ACCOUNT
          </span>
          {accounts?.map((item, i) => (
            <div
              key={i}
              // _hover={{ backgroundColor: "semiBlue", px: "20px", mx: "-20px" }}
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

        <div className="flex mx-[20px] px-[18px] py-[15px] bg-blue cursor-pointer mb-[43px] gap-[6px] rounded-[20px] shadow-2xl">
          <img src={chat} alt="chat" />
          <span className="text-[20px] font-[500]">CHAT SUPPORT</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
