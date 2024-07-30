/* eslint-disable react/prop-types */
import { Close, Sms } from '@mui/icons-material';
import { Box, Fab } from '@mui/material'
import React, { useState } from 'react'

export const FabSection = ({ mode, setIsOpen, IsOpen }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "76px",
        m: 2,
        zIndex: "10000",
        bottom: "5px",
        right: "20px",
        bgcolor: "rgb(124 58 237 /1)",
        boxShadow:
          mode === "light"
            ? "0 25px 50px -12px #1f2937"
            : "0 25px 50px -12px #2AC9DB",
        borderRadius: "148%",
        height: "71px",
      }}
      onClick={() => {
        setIsOpen(!IsOpen);
      }}
    >
      <Box
        sx={{
          display: "flex",
          m: IsOpen === false ? 2 : "13px 15px",
          justifyContent: "flex-end",
        }}
      >
        {IsOpen === false ? (
          <Sms sx={{ fontSize: "45px", color: "white", cursor: "pointer" }} />
        ) : (
          <Close sx={{ fontSize: "45px", color: "white", cursor: "pointer" }} />
        )}
      </Box>
    </Box>
  );
};
