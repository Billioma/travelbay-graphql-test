import React, { useEffect, useState } from "react";
import { undo } from "../../assets/exports";
import RICIBs from "react-individual-character-input-boxes";

const ConfirmOtp = () => {
  const [value, setValue] = useState("");
  const handleOutput = (string) => {
    setValue(string);
  };
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="">
      <div className="flex justify-end hover:underline">
        <a href="/register">Create an account</a>
      </div>

      <div className="mt-[86px]">
        <div className="text-dark text-[27px] font-bold">Confirm OTP</div>
        <div className="mt-10px text-[#093549]">
          A 6-digit confirmation code was sent to your email address <br />{" "}
          please enter below
        </div>
      </div>

      <div className="mt-[20px] w-full ">
        <RICIBs
          amount={6}
          handleOutputString={handleOutput}
          password
          inputProps={{
            style: {
              color: "#1C9FDA",
              width: "64px",
              height: "60px",
              border: value ? "1px solid #1C9FDA" : "1px solid #D0D5DD",
            },
          }}
          inputRegExp={/^[0-9]$/}
        />
      </div>

      <div className="mt-[40px] flex flex-col justify-center items-center">
        <div className="flex gap-[8px]">
          <div className="text-[#475467 ">
            O.T.P will expire in{" "}
            <span className={`${timeLeft <= 15 ? "text-[#FF0000]" : ""}`}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <button
            className="text-btnBlue font-medium hover:underline"
            onClick={() => window.location.reload()}
          >
            Resend O.T.P
          </button>
        </div>
        <div className="mt-[40px] flex items-center gap-[14px] rounded-[8px] py-[14px] px-[24px]">
          <span>
            <img src={undo} alt="undo" />
          </span>
          <a href="/login" className="text-btnBlue hover:underline font-bold">
            Return to Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOtp;
