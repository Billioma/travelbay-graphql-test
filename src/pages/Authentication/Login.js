import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="flex justify-end hover:underline">
        <a href="/register">Create an account</a>
      </div>

      <div className="mt-[86px]">
        <div className="text-dark text-[27px] font-bold">Welcome</div>
        <div className="mt-10px text-[#093549]">
          Login your travelbay account
        </div>
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          placeholder="Enter your email address name"
          label="Email Address"
        />
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          type={show ? "text" : "password"}
          password={show ? false : true}
          show
          onClick={() => setShow((prev) => !prev)}
          placeholder="Password (min of 8 characters and a number)"
          label="Password"
        />
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <button className="bg-btnBlue text-white font-bold rounded-[8px] h-[50px] w-full">
          Log In
        </button>

        <div className="my-[16px] rounded-[8px] py-[14px] px-[24px]">
          <span className="text-[#667085]">Forgot your password? </span>
          <a
            href="/forgot-password"
            className="underline text-dark underline-offset-2"
          >
            Reset it here
          </a>
        </div>

        <div className="bg-[#F6FBFE] flex gap-[5px] justify-center w-[85%] rounded-[8px] py-[14px] px-[24px]">
          <span className="text-[#667085]">
            Having problems logging in?
          </span>
          <a
            href="/register"
            className="underline text-dark underline-offset-2"
          >
            Chat with us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
