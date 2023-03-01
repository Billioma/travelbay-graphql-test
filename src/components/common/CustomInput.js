import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomInput = ({
  placeholder,
  check,
  show,
  password,
  onClick,
  type,
  label,
}) => {
  return (
    <div>
      <div className="text-[14px] font-medium text-[#093549] mb-[5px]">
        {label}
      </div>
      {type === "number" ? (
        <div className="flex items-center">
          <div className="flex border rounded-l border-[#e0e0e0] h-[50px] items-center bg-[#F9F9F9] p-[15px] gap-[12px]">
            <div>+234</div>
            <IoIosArrowDown />
          </div>
          <input
            placeholder={placeholder}
            type={type ? type : "text"}
            className="border w-full p-[16px] border-[#e0e0e0] rounded-[8px] border-l-0 rounded-l-none h-[50px] placeholder:text-[#667085]"
          />
        </div>
      ) : show ? (
        <div className="flex gap-[15px] items-center h-[50px] pl-0 p-[16px] border rounded-[8px] border-[#e0e0e0]">
          <input
            placeholder={placeholder}
            type={type ? type : "text"}
            className="w-full pl-[16px] border border-[#e0e0e0] border-r-0  h-[50px] placeholder:text-[#667085]"
          />
          <button
            className={`${onClick ? "flex" : "hidden"}`}
            onClick={onClick}
          >
            {!password ? (
              <span className="text-btnBlue font-medium">Hide</span>
            ) : (
              <span className="text-btnBlue font-medium">Show</span>
            )}
          </button>
        </div>
      ) : check ? (
        <input
          type="checkbox"
          className="border w-[20px] h-[20px] p-[16px] border-[#475569] rounded-[4px]"
        />
      ) : (
        <input
          placeholder={placeholder}
          type={type ? type : "text"}
          className="border w-full p-[16px] border-[#e0e0e0] rounded-[8px] h-[50px] placeholder:text-[#667085]"
        />
      )}
    </div>
  );
};

export default CustomInput;
