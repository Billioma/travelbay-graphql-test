import React, { useState } from "react";
import { google } from "../../assets/exports";
import CustomInput from "../../components/common/CustomInput";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../components/common/validation";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../services/mutation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [signup, { loading }] = useMutation(SIGNUP);
  const navigate = useNavigate();

  const [result, setResult] = useState("");

  const showToast = (message) => {
    setResult(message);
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  const handleSubmit = async (values = "") => {
    try {
      const { data } = await signup({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: String(values.phoneNumber),
          password: values.password,
        },
      });
      const registerResponse = data.register;
      if (registerResponse.__typename === "UserRegisterResultSuccess") {
        const token = registerResponse.token;
        sessionStorage.setItem("token", token);
        showToast("Registered successfully");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else if (registerResponse.__typename === "BadRequest") {
        showToast("An error occured");
      }
    } catch (error) {
      console.log(error);
      showToast("An error occured");
    }
  };

  return (
    <div>
      <div
        className={`toast ${
          result.includes("successfully")
            ? "success"
            : result.includes("error")
            ? "error"
            : ""
        }`}
      >
        {result}
      </div>
      <div className="flex justify-end hover:underline">
        <a href="/login">Sign In</a>
      </div>

      <div className="mt-[30px]">
        <div className="text-dark text-[27px] font-bold">Let's get started</div>
        <div className="mt-10px text-[#093549]">
          Create an account and enjoy a seamless travel booking experience.
        </div>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex gap-[24px] mt-[24px] w-full">
              <div className=" w-full ">
                <CustomInput
                  placeholder="Enter your first name"
                  label="First Name"
                  value={values?.firstName}
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors?.firstName && touched?.firstName && errors?.firstName
                  }
                />
              </div>
              <div className=" w-full ">
                <CustomInput
                  placeholder="Enter your last name"
                  label="Last Name"
                  name="lastName"
                  value={values?.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors?.lastName && touched?.lastName && errors?.lastName
                  }
                />
              </div>
            </div>

            <div className="mt-[20px] w-full ">
              <CustomInput
                placeholder="Enter your email address name"
                label="Email Address"
                value={values?.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors?.email && touched?.email && errors?.email}
              />
            </div>

            <div className="mt-[20px] w-full ">
              <CustomInput
                type="number"
                label="Phone Number"
                name="phoneNumber"
                value={values?.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors?.phoneNumber &&
                  touched?.phoneNumber &&
                  errors?.phoneNumber
                }
              />
            </div>

            <div className="mt-[20px] w-full ">
              <CustomInput
                type={show ? "text" : "password"}
                name="password"
                password={show ? false : true}
                show
                onClick={() => setShow((prev) => !prev)}
                placeholder="Password (min of 8 characters and a number)"
                label="Password"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors?.password && touched?.password && errors?.password
                }
              />
            </div>

            <div className="flex items-start gap-[8px] mt-[30px]">
              <CustomInput
                check
                isChecked={isTermsAccepted}
                onChange={() => setIsTermsAccepted((prev) => !prev)}
              />

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
                </a>{" "}
                <span className="text-[#ff0000]">*</span>
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
              <button
                type="submit"
                disabled={!isValid || !dirty || !isTermsAccepted}
                className="bg-btnBlue text-white font-bold items-center justify-center flex rounded-[8px] h-[50px] w-full"
              >
                {loading ? (
                  <div className="flex items-center gap-[10px]">
                    <div className="spinner" />
                    <span>Creating User</span>
                  </div>
                ) : (
                  "Create an account"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
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
        <a href="/register" className="underline text-dark underline-offset-2">
          Chat with us
        </a>
      </div>
    </div>
  );
};

export default Register;
