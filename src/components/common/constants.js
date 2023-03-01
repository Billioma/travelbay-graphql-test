import { dash, dasho, noti, settings } from "../../assets/exports";

export const general = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: dash,
    sec: dasho,
  },
  {
    id: 2,
    name: "School Portal",
    path: "/school-portal",
    //   icon: portal,
    //   sec: portalo,
  },
  {
    id: 3,
    name: "Parent Mgt",
    path: "/parent-mgt",
    //   icon: parent,
    //   sec: parento,
  },
];

export const accounts = [
  {
    id: 1,
    name: "Notification",
    path: "/notifications",
    icon: noti,
  },
  {
    id: 2,
    name: "Settings",
    path: "/settings",
    icon: settings,
  },
];

export const activeStyle = {
  backgroundColor: "#F1F5FE",
  alignItems: "center",
  display: "flex",
  color: "#182444",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  margin: "0 -20px 8px",
  padding: "13px 25px",
  borderRight: "4px solid #2463EB",
};

export const btn = [{ id: 1 }, { id: 2 }];
