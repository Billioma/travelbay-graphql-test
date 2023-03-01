import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/common/CustomInput";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-end hover:underline">
        <a href="/register">Create an account</a>
      </div>

      <div className="mt-[86px]">
        <div className="text-dark text-[27px] font-bold">
          Reset your password
        </div>
        <div className="mt-10px text-[#093549]">
          Please enter the email address associated with your account. We will{" "}
          <br /> send you an email with instructions on how to recover your
          password.
        </div>
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          placeholder="Enter your email address name"
          label="Email Address"
        />
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <button
          className="bg-btnBlue text-white font-bold rounded-[8px] h-[50px] w-full"
          onClick={() => navigate("/confirm-otp")}
        >
          Continue
        </button>

        <div className="my-[16px] rounded-[8px] py-[14px] px-[24px]">
          <a href="/login" className="text-btnBlue font-bold">
            Return to Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
