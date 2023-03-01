import React, { useState } from "react";
import { check, logo } from "../../assets/exports";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { btn } from "../../components/common/constants";

const SideBarr = () => {
  const [show, setShow] = useState(btn.map(() => false));
  const [tab, setTab] = useState(1);

  const handleClick = (index) => {
    setShow((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="lg:w-[50%] sm:w-full bg-[#F7F7F8] pt-[30px]">
      <img src={logo} alt="logo" className="px-[57px]" />

      <div className="flex px-[57px] flex-col items-center justify-center">
        <div className="mt-[70px] w-[85%] bg-gradient-to-b from-white to-[#F7F7F8] rounded-[8px] px-[24px] py-[30px]">
          <div className="flex md:flex-row sm:flex-col sm:items-start md:items-center justify-between w-full">
            <div>
              <div className="text-dark text-[17px] font-bold">Packages</div>
              <div className="text-[13px] font-medium text-light">
                Travel packages made for you
              </div>
            </div>

            <div className="md:mt-0 sm:mt-2">
              <button className="bg-red text-[15px] px-[18px] py-[11px] text-white bg-btnBlue rounded-[8px]">
                Create custom tip
              </button>
            </div>
          </div>

          <div className="flex gap-[15px] items-center">
            {btn.map((data, index) => (
              <div key={data.id} className="relative mt-[20px]">
                <img src={check} alt="" />
                <div className="flex items-start justify-end absolute top-0 right-0">
                  <button
                    className="bg-white m-[10px] rounded-full  p-[12px]"
                    onClick={() => handleClick(index)}
                  >
                    {show[index] ? (
                      <MdFavorite
                        color="#1C9FDA"
                        size="22px"
                        cursor="pointer"
                      />
                    ) : (
                      <MdFavoriteBorder
                        color="#d9d9d9"
                        size="22px"
                        cursor="pointer"
                      />
                    )}
                  </button>
                </div>
              </div>
              // <div key={data.id} className="mb-[16px] w-full">
              //   <div className="flex flex-col bg-gradient-to-b from-[#f5f5f5] to-[#F7F7F8] mt-[20px] pb-[26px] min-h-[298px] rounded-[8px]">
              //     <div className="flex-1">
              //       <div className="flex-1 flex justify-end items-center">
              //         <button
              //           className="bg-white m-[10px] rounded-full  p-[12px]"
              //           onClick={() => handleClick(index)}
              //         >
              //           {show[index] ? (
              //             <MdFavorite
              //               color="#1C9FDA"
              //               size="22px"
              //               cursor="pointer"
              //             />
              //           ) : (
              //             <MdFavoriteBorder
              //               color="#d9d9d9"
              //               size="22px"
              //               cursor="pointer"
              //             />
              //           )}
              //         </button>
              //       </div>
              //     </div>

              //     <div>
              //       {new Array(3).fill(0).map((_, i) => (
              //         <div key={i} className="mb-[12px]">
              //           {new Array(1).fill(0).map((_, i) => (
              //             <div
              //               key={i}
              //               className="mx-[10px] bg-[#E3E3E3] opacity-[0.2] w-auto py-[11px] rounded-full"
              //             />
              //           ))}
              //         </div>
              //       ))}
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>

        <div className="flex mb-[60px] flex-col justify-center items-center">
          <div className="text-[18px] font-bold text-[#093549]">
            Access packages & create custom trips
          </div>
          <div className="mt-[4px] text-[15px] text-[#475467] text-center">
            Explore ready made packages from the best deals in the market for
            you. Tailor your perfect adventure with our custom trip creation
            tool.
          </div>

          <div className="flex mt-[24px] gap-[15px]">
            {btn.map((data) => (
              <button
                key={data.id}
                onClick={() => setTab(data.id)}
                className={`${
                  tab === data.id ? "bg-btnBlue" : "bg-[#D4DFE4]"
                } px-[30px] py-[4px] rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarr;
