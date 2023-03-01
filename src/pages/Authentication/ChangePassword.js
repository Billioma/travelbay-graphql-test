import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";

const ChangePassword = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="flex justify-end hover:underline">
        <a href="/register">Create an account</a>
      </div>

      <div className="mt-[86px]">
        <div className="text-dark text-[27px] font-bold">
          Create a new password
        </div>
        <div className="mt-10px text-[#093549]">
          Enter a new password of your choice but please make sure it's known to{" "}
          <br />
          you alone.
        </div>
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          type={show ? "text" : "password"}
          password={show ? false : true}
          show
          onClick={() => setShow((prev) => !prev)}
          placeholder="Password (min of 8 characters and a number)"
          label="New password"
        />
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          type={show ? "text" : "password"}
          password={show ? false : true}
          show
          onClick={() => setShow((prev) => !prev)}
          placeholder="Password (min of 8 characters and a number)"
          label="Re-type new password"
        />
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <button className="bg-btnBlue text-white font-bold rounded-[8px] h-[50px] w-full">
          Confirm new password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
