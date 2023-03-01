import React, { useState } from "react";
import { google } from "../../assets/exports";
import CustomInput from "../../components/common/CustomInput";

const Register = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="flex justify-end hover:underline">
        <a href="/login">Sign In</a>
      </div>

      <div className="mt-[30px]">
        <div className="text-dark text-[27px] font-bold">Let's get started</div>
        <div className="mt-10px text-[#093549]">
          Create an account and enjoy a seamless travel booking experience.
        </div>
      </div>

      <div className="flex gap-[24px] mt-[24px] w-full">
        <div className=" w-full ">
          <CustomInput placeholder="Enter your first name" label="First Name" />
        </div>
        <div className=" w-full ">
          <CustomInput placeholder="Enter your last name" label="Last Name" />
        </div>
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          placeholder="Enter your email address name"
          label="Email Address"
        />
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput type="number" label="Phone Number" />
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

      <div className="flex items-start gap-[8px] mt-[30px]">
        <CustomInput check />

        <div>
          I have read and agree to Travelbay's{" "}
          <a
            href="/register"
            className="text-btnBlue underline underline-offset-2"
          >
            {" "}
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/register"
            className="text-btnBlue underline underline-offset-2"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="flex items-start gap-[8px] mt-[30px]">
        <CustomInput check />

        <div>
          Join Travelbay travel community for exclusive access to travel
          resources and events to help you grow.
        </div>
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <button className="bg-btnBlue text-white font-bold rounded-[8px] h-[50px] w-full">
          Create an account
        </button>
        <div className="flex gap-[30px] items-center my-[15px] text-[#667085] font-medium">
          <div className="w-full border h-[1px]" />
          OR
          <div className="w-full border h-[1px]" />
        </div>
        <button className="gap-[25px] text-[#667085] h-[50px] font-bold rounded-[8px] border-[#093549] border flex items-center justify-center w-full">
          <img src={google} alt="google" /> Continue with Google
        </button>

        <div className="bg-[#F6FBFE] w-[85%] mt-[16px] rounded-[8px] py-[14px] px-[24px]">
          <span className="text-[#667085]">
            Having problems creating an account?{" "}
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

export default Register;
