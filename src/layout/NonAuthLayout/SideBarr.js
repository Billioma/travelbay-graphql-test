import React, { useEffect, useState } from "react";
import { arrow, check, logo } from "../../assets/exports";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { btn } from "../../components/common/constants";
import { useLocation } from "react-router-dom";

const SideBarr = () => {
  const location = useLocation();
  const [show, setShow] = useState(btn.map(() => false));
  const [tab, setTab] = useState(1);

  const handleClick = (index) => {
    setShow((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % btn.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + btn.length) % btn.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % btn.length);
  };

  return (
    <div className="lg:w-[50%] sm:w-full bg-[#F7F7F8] pt-[30px]">
      <img src={logo} alt="logo" className="px-[57px]" />

      <div
        className={`flex sm:px-[10px] md:px-[57px] ${
          location.pathname === "/register" ? "min-h-[100vh]" : "min-h-[80vh]"
        } min-h-[70vh] flex-col items-center justify-center`}
      >
        {location.pathname === "/register" ? (
          <>
            <div className="mt-[70px] flex-1 w-[85%] bg-gradient-to-b from-white to-[#F7F7F8] rounded-[8px] px-[24px] py-[30px]">
              <div className="flex md:flex-row sm:flex-col sm:items-start md:items-center justify-between w-full">
                <div>
                  <div className="text-dark text-[17px] font-bold">
                    Packages
                  </div>
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

              <div className="sm:hidden lg:flex gap-[15px] items-center">
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
                ))}
              </div>

              <div className="sm:flex lg:hidden mt-[24px] flex-col justify-center items-center">
                <div className="carousel-container">
                  <div
                    className="carousel-image-container"
                    style={{ "--currentIndex": currentIndex }}
                  >
                    {btn.map((data, index) => (
                      <>
                        <span className="absolute z-40 right-0 m-[20px]">
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
                        </span>
                        <img
                          key={data.id}
                          src={check}
                          alt={`slide-${index}`}
                          className={`carousel-image ${
                            index === currentIndex ? "active" : ""
                          }`}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-[30px] sm:px-[10px] md:px-[57px] flex-col justify-center items-center">
              <div className="text-[18px] font-bold text-[#093549]">
                Access packages & create custom trips
              </div>
              <div className="mt-[4px] text-[15px] text-[#475467] text-center">
                Explore ready made packages from the best deals in the market
                for you. Tailor your perfect adventure with our custom trip
                creation tool.
              </div>

              <div className="flex mt-[24px] gap-[15px]">
                <button
                  className={`${
                    currentIndex === 0 ? "bg-btnBlue" : "bg-[#D4DFE4]"
                  } px-[30px] py-[4px] rounded-full`}
                  onClick={handlePrev}
                />
                <button
                  className={`${
                    currentIndex === 1 ? "bg-btnBlue" : "bg-[#D4DFE4]"
                  } px-[30px] py-[4px] rounded-full`}
                  onClick={handleNext}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mt-auto sm:px-[10px] md:px-[57px] pb-[30px]">
            <div className="flex flex-col justify-center items-center">
              <div className="text-[18px] font-bold text-[#093549]">
                Customize a payment plan for your dream trip
              </div>
              <div className="mt-[4px] text-[15px] text-[#475467] text-center">
                Choose a payment frequency that works for you to make your dream
                trip happen. You can pay in installments before the departure
                date is close.
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
        )}
        <div className="sm:flex lg:hidden bg-white p-3 rounded-full mb-[30px]">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBarr;
