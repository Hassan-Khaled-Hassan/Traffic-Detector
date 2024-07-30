/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import image from "../../images/hero-img.png";
import "./MyApp.css";
const MyApp = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        borderTop: "1px solid",
        borderColor: "divider", // Add border top
        mt: "auto", // Push footer to bottom of the page
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: { xs: "100%", sm: "44%", md: "44%" },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%" } }}>
            <Typography variant="h3" fontWeight={600} mb={4} gutterBottom>
              Download App
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mb={4}
              sx={{ lineHeight: 2 }}
            >
              Over fact all son tell this any his. No insisted confined of
              weddings to returned to debating rendered. Keeps order fully so do
              party means young. Table nay him jokes quick.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, borderRadius: 3 }}
                startIcon={<i class="fa-brands fa-google-play"></i>}
              >
                Google Play
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, borderRadius: 3 ,ml:4}}
                startIcon={<i class="fa-brands fa-app-store"></i>}
              >
                App Store
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: { xs: "100%", sm: "44%", md: "44%" },
            position: "relative",
          }}
          className="image"
        >
          <Box sx={{ width: { xs: "100%" } }}>
            <img
              src={image}
              alt="My App"
              style={{ width: "inherit", height: "455px" }}
              className="image"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MyApp;
