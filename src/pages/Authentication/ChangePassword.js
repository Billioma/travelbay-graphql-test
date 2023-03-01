import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import { passwordRegex } from "../../components/common/validation";

const ChangePassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const isPasswordValid = passwordRegex.test(password);

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
          error={error}
          onFocus={() => setError(false)}
          onBlur={() => (isPasswordValid ? setError(false) : setError(true))}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className={` ${
            !error ? "hidden" : "flex"
          } mt-[3px] text-[12px] text-[red]`}
        >
          Must Be More Than 8 Digits And Must Contain One Uppercase, One
          Lowercase, One Number and One Special Case Character
        </span>
      </div>

      <div className="mt-[20px] w-full ">
        <CustomInput
          type={show ? "text" : "password"}
          password={show ? false : true}
          show
          onClick={() => setShow((prev) => !prev)}
          placeholder="Password (min of 8 characters and a number)"
          label="Re-type new password"
          error={check}
          onFocus={() => setCheck(false)}
          onBlur={() =>
            password2 !== password ? setCheck(true) : setCheck(false)
          }
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <span
          className={` ${
            !check ? "hidden" : "flex"
          } mt-[3px] text-[12px] text-[red]`}
        >
          Passwords do not match
        </span>
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <button
          disabled={!password || password2 !== password || !isPasswordValid}
          className="bg-btnBlue text-white font-bold rounded-[8px] h-[50px] w-full"
        >
          Confirm new password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
