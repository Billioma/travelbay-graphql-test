import React from "react";

const UserData = ({ label, value, icon }) => {
  return (
    <div>
      <div>{label}</div>
      <div className="flex p-3 items-center h-[60px] sm:w-auto lg:w-[346px] border border-btnBlue gap-[20px] bg-[#F6FBFE] rounded-[10px]">
        <img src={icon} alt="" className="w-[25px] h-[25px]" />
        <input
          className="bg-transparent h-[60px] sm:w-auto lg:w-[346px] rounded-l-none rounded-[10px] text-[17px]"
          readOnly
          value={value}
        />
      </div>
    </div>
  );
};

export default UserData;
