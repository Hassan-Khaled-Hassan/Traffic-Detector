import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import vedio from "../../images//vedio.mp4";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import UseHomeHook from "./UseHomeHook";
// eslint-disable-next-line react/prop-types
const Home = ({ screenWidth }) => {
    const [cardTop, text, videoRef] = UseHomeHook();
  return (
    <Box>
      <div
        className="header-info-par"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          top: cardTop,
        }}
      >
        <Card
          sx={{
            width:
              screenWidth > 1025
                ? "42%"
                : screenWidth > 800
                ? "57%"
                : screenWidth > 700
                ? "55%"
                : "78%",
            zIndex: 10,
            padding: screenWidth > 700 ? "40px" : "14px",
            pb: 3,
            borderRadius: "95px 15px",
            boxShadow:
              "0 4px 8px 0 rgb(110 106 106 / 73%), 0 6px 20px 0 rgb(108 105 105 / 76%)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              sx={{
                fontWeight: "bolder",
                fontSize: { sx: "1.3rem", md: "1.5rem" },
                lineHeight: 1.5,
                marginBottom: 2,
              }}
            >
              {text.split(" ").map((word, index) => {
                const targetWords = [
                  "Tiki",
                  "Taka",
                  "Intelligent",
                  "Speed",
                  "map",
                  "database",
                ];
                if (targetWords.includes(word.trim())) {
                  return (
                      <React.Fragment key={index}>
                      <div
                        style={{
                          display: "inline-block",
                          color: "#3FBDD9",
                          marginLeft: "5px",
                        }}
                      >
                        {word}
                      </div>{" "}
                      {(word === "translates." ||
                        word === "database" ||
                        word === "to") && <br />}
                    </React.Fragment>
                  );
                } else if (word.includes("translates.") || word === "to") {
                  return (
                    <React.Fragment key={index}>
                      {word} <br />
                    </React.Fragment>
                  );
                } else {
                  return <React.Fragment key={index}>{word} </React.Fragment>;
                }
              })}
              <span style={{ color: "#3FBDD9",fontSize:"1.7rem"}}>
                <Cursor />
              </span>
            </Typography>

            <Typography sx={{ mb: 1.5 }} textAlign="center" variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              ea. Mollitia maiores voluptatum vitae suscipit tenetur ut officiis
              assumenda ipsam.
            </Typography>
          </CardContent>
          <CardActions
            textAlign="center"
            display="flex"
            justifyContent="center"
            sx={{ justifyContent: "center" }}
          >
            <Button variant="contained" sx={{ padding: "12px 39px" }}>
              Check Forecast
            </Button>{" "}
          </CardActions>
        </Card>
      </div>
      <div className="video">
        <video
          ref={videoRef}
          id="video"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "39rem",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={vedio} type="video/mp4" />
        </video>
      </div>
    </Box>
  );
};

export default Home;
