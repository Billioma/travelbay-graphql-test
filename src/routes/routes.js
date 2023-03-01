import { lazy } from "react";
import WithSuspense from "../components/Loaders/WithSuspense";
import { PUBLIC_PATHS, PRIVATE_PATHS } from "./constants";
import { Navigate } from "react-router-dom";

const { LOGIN, REG, FOG_PASS, OTP } = PUBLIC_PATHS;

const { HOME } = PRIVATE_PATHS;

const Login = WithSuspense(lazy(() => import("../pages/Authentication/Login")));
const Reg = WithSuspense(
  lazy(() => import("../pages/Authentication/Register"))
);
const ForgotPassword = WithSuspense(
  lazy(() => import("../pages/Authentication/ForgotPassword"))
);
const ConfirmOtp = WithSuspense(
  lazy(() => import("../pages/Authentication/ConfirmOtp"))
);
const Home = WithSuspense(
  lazy(() => import("../pages/Home/Home"))
);

export const PUBLIC_ROUTES = [
  { path: LOGIN, element: <Login /> },
  { path: REG, element: <Reg /> },
  { path: FOG_PASS, element: <ForgotPassword /> },
  { path: OTP, element: <ConfirmOtp /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];
export const PRIVATE_ROUTES = [
  { path: HOME, element: <Home /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
