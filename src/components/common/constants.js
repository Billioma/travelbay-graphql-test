import {
  dash,
  dasho,
  slide1,
  slide2,
  slide3,
  slide4,
} from "../../assets/exports";

export const general = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: dash,
    sec: dasho,
  },
  {
    id: 2,
    name: "Destination",
    path: "/destination",
    icon: dash,
    sec: dasho,
  },
  {
    id: 3,
    name: "Departure",
    path: "/departure",
    icon: dash,
    sec: dasho,
  },
];

export const accounts = [
  {
    id: 1,
    name: "Profile",
    path: "/",
    icon: dash,
    sec: dasho,
  },
  {
    id: 2,
    name: "Settings",
    path: "/settings",
    icon: dash,
    sec: dasho,
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

export const slideshow = [slide1, slide2, slide3, slide4];
