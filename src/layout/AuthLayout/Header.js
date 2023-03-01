import React from "react";
import { bell, search, sms } from "../../assets/exports";
// import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <div className="flex flex-col fixed z-[5] py-[10px] text-white bg-red">
      <div className="flex pb-[20px] items-center pl-[320] pr-[48px] w-full">
        <form>
          <div className="flex">
            <span>
              <img src={search} alt="search" />
            </span>

            <input 
              placeholder="Search students, class, course etc.."
            />
          </div>
        </form>

        <div className="flex items-center gap-[18px]">
          <img src={sms} alt="sms" />
          <img src={bell} alt="bell" />
          <div className="flex justify-between w-full items-center" >
            <div className="flex gap-[20px] items-center">
              <img src={bell} alt="bell" />

              <div>
                <span>Talan James</span>
                <span>Honeyland College</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isMobile ? (
        <Flex
          color="#BDBDBD"
          borderRadius="20px"
          mt="38px"
          border="1px solid rgba(104, 132, 202, 0.5)"
          p="7px"
          onClick={onOpen}
          w="fit-content"
          ml={isMobile ? "25px" : "320px"}
          cursor="pointer"
        >
          <IoMdMenu size="20px" />
        </Flex>
      ) : (
        <Flex
          align="center"
          color="#BDBDBD"
          borderRadius="20px"
          mt="38px"
          border="1px solid rgba(104, 132, 202, 0.5)"
          p="7px"
          w="fit-content"
          ml={isMobile ? "20px" : "320px"}
          gap="10px"
          transition=".4s ease-in-out"
          cursor="pointer"
          _hover={{ bg: "blueBg", color: "#fff" }}
        >
          <RxArrowLeft />
          <span>Back</span>
        </Flex>
      )} */}

      {/* <SideDrawer isOpen={isOpen} onClose={onClose} /> */}
    </div>
  );
};

export default Header;
