import React, { useState } from "react";
import { avatar, search } from "../../assets/exports";
import { RxExit } from "react-icons/rx";
import { useLogOut } from "../../utils/helper";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../services/mutation";
import SideDrawer from "./SideDrawer";
import { MdMenu } from "react-icons/md";

const Header = ({ showSidebar }) => {
  const logOut = useLogOut();
  const { data } = useQuery(GET_USER);

  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const toggleSidebar = () => {
    setShowDrawerMenu(true);
  };

  return (
    <div className="flex flex-col bg-[#0F172B] w-full fixed z-[5] sm:py-[20px] lg:py-[10px] text-white">
      <SideDrawer
        isOpen={showDrawerMenu}
        onClose={() => setShowDrawerMenu(false)}
      />
      {showSidebar ? (
        <div className="flex justify-between py-[15px] items-center pl-[320px] pr-[58px] w-full">
          <div className="flex gap-[15px] items-center w-full">
            <div>
              <img src={search} alt="search" />
            </div>

            <input
              placeholder="Search flights, hotels etc.."
              className="placeholder:text-[gray] w-[50%] placeholder:text-[13px] placeholder:p-[5px] bg-transparent border-none"
            />
          </div>

          <div className="flex w-[40%] items-center gap-[10px]">
            <div className="border rounded-full w-[55px] flex flex-col justify-center items-center border-blue-900">
              <img src={avatar} alt="user" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div>
                <div className="text-[15px] font-medium">
                  {data?.me?.firstName} {data?.me?.lastName}
                </div>
                <div className="text=[11px] text-[gray]">{data?.me?.email}</div>
              </div>
              <div className="relative par">
                <button
                  onClick={logOut}
                  className="border rounded-full p-3 border-blue-900"
                >
                  <RxExit />
                </button>
                <div className="absolute logout">logout</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex px-[30px] justify-between">
          <div>
            <MdMenu size="32px" onClick={toggleSidebar} />
          </div>
          <div className="flex w-auto items-center gap-[10px]">
            <div className="border rounded-full w-[55px] flex flex-col justify-center items-center border-blue-900">
              <img src={avatar} alt="user" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div>
                <div className="text-[15px] font-medium">
                  {data?.me?.firstName} {data?.me?.lastName}
                </div>
                <div className="text=[11px] text-[gray]">{data?.me?.email}</div>
              </div>
              <div className="relative par">
                <button
                  onClick={logOut}
                  className="border rounded-full p-3 border-blue-900"
                >
                  <RxExit />
                </button>
                <div className="absolute logout">logout</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
