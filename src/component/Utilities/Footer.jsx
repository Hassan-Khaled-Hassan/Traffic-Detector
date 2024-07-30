import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../images/Group 1.png";
import GitHubIcon from "@mui/icons-material/GitHub";

// eslint-disable-next-line react/prop-types
const Footer = ({ mode, open, screenWidth, drawerWidth }) => {
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
        mt: "auto",
        mr: open ? (screenWidth > 600 ? "45px" : "auto") : "auto", // Push footer to bottom of the page
      }}
      width={`${
        open
          ? screenWidth > 600
            ? `calc(100% - ${drawerWidth}px)`
            : "100%"
          : "100%"
      }`}
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
            minWidth: { xs: "100%", sm: "40%", md: "50%" },
          }}
        >
          <Box sx={{ width: { xs: "100%" } }}>
            <Box mb={5}>
              <img
                src={image}
                alt="logo of traffic detector"
                style={{ width: "175px", height: "60px" }}
              />
            </Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                sx={{
                  boxShadow: "1px 3px 31px 8px #27598bc4",
                }}
                inputProps={{
                  autoComplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, borderRadius: 3 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Features
            </Button>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Testimonials
            </Button>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Highlights
            </Button>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Pricing
            </Button>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              FAQs
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              About us
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Careers
            </Button>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Press
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Terms
            </Button>
          </Link>
          <Link color="text.secondary" href="#">
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Privacy
            </Button>
          </Link>
          <Link color="text.secondary" href="#">
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                border: "0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.25)",
                },
              }}
              startIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            >
              Contact
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link href="#">
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                mb: "8px",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0px",
                  height: "2px",
                  bottom: "0px",
                  left: "0px",
                  backgroundColor: "rgb(156, 204, 252)",
                  opacity: "0.7",
                  transition: "width 0.3s ease, opacity 0.3s ease",
                },
                "&:hover::after": {
                  width: "130px",
                },
              }}
            >
              Privacy Policy
            </Button>
          </Link>
          <Box
            display="inline"
            sx={{ mx: 0.5, opacity: 0.5, fontSize: "1.7rem", pt: 2 }}
          >
            &nbsp;•&nbsp;
          </Box>
          <Link color="text.secondary" href="#">
            <Button
              sx={{
                color:
                  mode === "light" ? "rgb(76, 89, 103)" : "rgb(148, 166, 184)",
                mb: "8px",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0px",
                  height: "2px",
                  bottom: "0px",
                  left: "0px",
                  backgroundColor: "rgb(156, 204, 252)",
                  opacity: "0.7",
                  transition: "width 0.3s ease, opacity 0.3s ease",
                },
                "&:hover::after": {
                  width: "148px",
                },
              }}
            >
              Terms of Service
            </Button>
          </Link>
          <Box variant="body2" color="text.secondary" mt={1}>
            {"Copyright © "}
            <Link href="https://mui.com/">
              <Button
                sx={{
                  color:
                    mode === "light"
                      ? "rgb(76, 89, 103)"
                      : "rgb(148, 166, 184)",
                  mb: "2px",
                  mr: "5px",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0px",
                    height: "2px",
                    bottom: "0px",
                    left: "0px",
                    backgroundColor: "rgb(156, 204, 252)",
                    opacity: "0.7",
                    transition: "width 0.3s ease, opacity 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "120px",
                  },
                }}
              >
                Black Coders
              </Button>
            </Link>
            {new Date().getFullYear()}
          </Box>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <i className="fa-brands fa-square-facebook"></i>
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;
