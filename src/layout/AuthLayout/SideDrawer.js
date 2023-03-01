import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/exports";
import {
  accounts,
  activeStyle,
  general,
} from "../../components/common/constants";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          whileInView={{ x: [-300, 0], y: [200, 0] }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="flex flex-col absolute min-h-screen shadow-2xl top-0 sm:w-2/3 md:w-1/2 z-[5] bg-white">
            <div className="flex flex-col min-h-screen">
              <div className="flex px-[20px] pt-[15px] border-b border-b-[#e0e0e0] items-center justify-between">
                <img src={logo} alt="logo" className="w-[180px] h-[80px]" />
                <FaTimes size="20px" color="#000" onClick={onClose} />
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
                        onClick={onClose}
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
                          src={
                            location.pathname === item.path
                              ? item.sec
                              : item.icon
                          }
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
                        onClick={onClose}
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
                          src={
                            location.pathname === item.path
                              ? item.sec
                              : item.icon
                          }
                        />
                        {item.name}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SideDrawer;
