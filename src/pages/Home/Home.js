import { useQuery } from "@apollo/client";
import React from "react";
import { avatar, sms, user } from "../../assets/exports";
import UserData from "../../components/common/UserData";
import { GET_USER } from "../../services/mutation";
import { formatDateTime } from "../../utils/helper";

const Home = () => {
  const { data } = useQuery(GET_USER);

  console.log(data);
  return (
    <div>
      <div className="flex items-end gap-[20px]">
        <img
          src={avatar}
          alt=""
          className="border-[3px] border-[#1C9FDA] border-t-[#F1EBF9] p-[0.5] rounded-full w-[59px] h-[59px]"
        />
        <div>Created At: {formatDateTime(data?.me?.createdAt)}</div>
      </div>

      <div className="flex sm:flex-col md:flex-row mt-[40px] gap-[40px]">
        <div className="sm:w-full lg:w-auto">
          <UserData
            label="Full Name"
            icon={user}
            value={`${data?.me?.firstName} ${data?.me?.lastName}`}
          />
        </div>
        <div className="sm:w-full lg:w-auto">
          <UserData label="Email Address" icon={sms} value={data?.me?.email} />
        </div>
      </div>

      <div className="mt-[40px]">
        <UserData
          label="Phone Number"
          icon={user}
          value={data?.me?.phoneNumber}
        />
      </div>
    </div>
  );
};

export default Home;
