/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import React from 'react'

const MyLineChart = ({ NewitemsSum }) => {
  const theme = useTheme();
  const data = [
    {
      id: "Forecast",
      color: "hsl(327, 70%, 50%)",
      data: NewitemsSum,
    },
  ];
  return (
    <Box
      height="400px"
      width="100%"
      sx={{ bgcolor: "aliceblue", borderRadius: "25px" }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }} // Change xScale type to 'point'
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Car Count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "category10" }}
        enableGridX={false}
        enableGridY={true}
        lineWidth={4}
        pointSize={11}
        pointColor={{ theme: "grid.line.stroke" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        enablePointLabel={true}
        pointLabel="data.y"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        motionConfig="wobbly"
        markers={[
          {
            axis: "x",

            lineStyle: {
              stroke: "#671388",
              strokeWidth: 4,
            },
            value:
              NewitemsSum.length >= 2
                ? NewitemsSum[NewitemsSum.length - 2].x
                : null,
          },
        ]}
      />
    </Box>
  );
};

export default MyLineChart