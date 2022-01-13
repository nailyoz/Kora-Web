import React from "react";
import { styled, Typography, Avatar } from "@mui/material";

const CustomAvatar = styled("Avatar")(() => ({
  width: "250px",
  height: "250px",
  borderRadius: "250px",
  backgroundColor: "#FF2500",
}));

export function RoundedChip(props) {
  return (
    <div
      style={{
        width: "300px",
        height: "380px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <img
        src={props.imgSource}
        alt=""
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "250px",
          backgroundColor: "#FF2500",
        }}
      ></img>
      {/* <CustomAvatar src={props.imgSource} /> */}
      <Typography variant="h4" align="center" sx={{ marginTop: "5px" }}>
        {props.text}
      </Typography>
    </div>
  );
}
