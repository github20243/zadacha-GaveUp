import React from "react";
import { styled } from "@mui/material";

const SideBar = () => {
  return (
    <Styled>
      <p>Side Bar Content</p>
    </Styled>
  );
};

export default SideBar;

const Styled = styled("div")(({ theme }) => ({
  width: "297px", 
  height: "100vh",
  background: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "18px",
  transition: "width 0.3s ease",
}));
