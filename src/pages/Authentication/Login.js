import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/common/CustomInput";
import { initValues, validateSchema } from "../../components/common/validation";
import { LOGIN } from "../../services/mutation";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [login, { loading }] = useMutation(LOGIN);

  const [result, setResult] = useState("");

  const showToast = (message) => {
    setResult(message);
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  const handleSubmit = async (values = "") => {
    try {
      const { data } = await login({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      const loginResponse = data.login;
      if (loginResponse.__typename === "UserLoginResultSuccess") {
        const token = loginResponse.token;
        sessionStorage.setItem("token", token);
        showToast("Logged In successfully");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else if (loginResponse.__typename === "BadRequest") {
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
        <a href="/register">Create an account</a>
      </div>

      <div className="mt-[86px]">
        <div className="text-dark text-[27px] font-bold">Welcome</div>
        <div className="mt-10px text-[#093549]">
          Login your travelbay account
        </div>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initValues}
        validationSchema={validateSchema}
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

            <button
              type="submit"
              disabled={!isValid || !dirty}
              className="bg-btnBlue text-white mt-[40px] font-bold items-center justify-center flex rounded-[8px] h-[50px] w-full"
            >
              {loading ? (
                <div className="flex items-center gap-[10px]">
                  <div className="spinner" />
                  <span>Logging In</span>
                </div>
              ) : (
                "Log In"
              )}
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-[40px] flex flex-col justify-center items-center">
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
          <span className="text-[#667085]">Having problems logging in?</span>
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
