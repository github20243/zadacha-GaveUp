import React, { useState } from "react";
import SideBar from "./components/SideBar";
import { styled } from "@mui/material";
import { GaveUpPage } from "./components/GaveUp";

const App = () => {
	return (
		// <StyledBox>
		// 	{/* <SideBar /> */}
		// </StyledBox>
  <GaveUpPage />
	);
	ы;
};

export default App;

const StyledBox = styled("div")(() => ({
	display: "flex",
	margin: "0 auto",
	transition: "margin-left 0.3s",
	maxWidth: "1440px",
}));
