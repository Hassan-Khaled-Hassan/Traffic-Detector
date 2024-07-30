/* eslint-disable react/prop-types */
import { Box, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { MailIcon } from '@mui/icons-material/Mail';
import { ResponsivePie } from '@nivo/pie';
import { useTheme } from '@emotion/react';
import UseFirstRowHook from './UseFirstRowHook';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const MyCard = ({ icon, title, subTitle, data, scheme,mode }) => {
     const theme = useTheme();
    //  const [Users] = UseFirstRowHook();
    //  console.log(Users);
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (title > 0) {
        const interval = setInterval(() => {
          setCurrentValue((prevValue) => {
            const newValue = prevValue + 1;
            return newValue <= title ? newValue : title;
          });
        }, 40); // Adjust interval for desired animation speed

        // Clean up interval on component unmount or when countTo changes
        return () => clearInterval(interval);
      }
    }, [title]);
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        background:
          mode === "dark"
            ? "linear-gradient(90deg,#1F3A5F 40%, #4d648d 100%)"
            : "linear-gradient(90deg,#003f8f 40%, #757de8  100%)",
      }}
    >
      <Stack direction="row" gap={1} sx={{alignItems: "center"}}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "22px", color: "white" }}>
          {currentValue}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "22px", color: "white" }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems={"center"}>
        {data && data.length > 0 ? (
          <Box height={"55px"} width={"87px"}>
            <ResponsivePie
              data={data}
              margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
              innerRadius={0.7}
              sortByValue={true}
              theme={{
                textColor: theme.palette.text.primary,
                fontSize: 11,
                axis: {
                  domain: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.divider,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.secondary,
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  container: {
                    background: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              colors={{ scheme: scheme }}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -90,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
            />
          </Box>
        ) : null}
      </Stack>
    </Paper>
  );
};

export default MyCard