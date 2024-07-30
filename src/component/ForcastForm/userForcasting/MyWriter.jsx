/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const MyWriter = ({ Classify }) => {

  if (Classify !== "") {
    // Only use typewriter effect if Classify is not empty
    const [text] = useTypewriter({
      words: [
        `Based on the chart and that result. It is clear to us that the traffic flow of the Cairo road will be ${Classify} crowded at that time, matched with the traffic flow of the road in the previous days.`,
      ],
      loop: 1,
      typeSpeed: 120,
      deleteSpeed: 0,
    });
  }
  const [textProvider, settextProvider] = useState(text);
  return (
    <Box>
      <Typography
        sx={{
          width: "94%",
          m: "auto",
          fontSize: "23px",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MyWriter