import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UseResetPassP2 from './UseResetPassP2';
import { ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
const ResetPassP2 = ({ mode, screenWidth }) => {
  const [
    theme,
    snapOpen,
    handleSubmit,
    handleClick,
    handleClose,
    OnChangeCode,
    Code,
    loading,
  ] = UseResetPassP2();
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 6 },
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#bdb9b9",
        backgroundImage:
          mode === "light"
            ? 'url("https://iili.io/JXsU4yu.jpg")'
            : 'url("https://iili.io/JXLqTYB.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        component="div"
        maxWidth="sm"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "55px",
          width: "565px",
          ml: screenWidth >= 900 ? "16px" : "inherit",
        }}
        bgcolor="primary.light"
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#CF77F3" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify code
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            sx={{
              mt: 3,
              mb: "12px",
              pl: "10px",
              lineHeight: "2",
              letterSpacing: "1px",
            }}
          >
            Enter your user account's verified email address and we will send
            you a Verify Code Mail.
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3, width: "100%" }}
            onSubmit={handleSubmit(handleClick)}
            autoComplete="false"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Code"
                  value={Code}
                  onChange={OnChangeCode}
                  sx={{ mb: "12px" }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "60%",
                    mr: "auto",
                    ml: "auto",
                    borderRadius: " 999px",
                    p: "10px 30px",
                    background:
                      "linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)",
                    color: "white",
                    "&:hover": {
                      boxShadow:
                        "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
                    },
                    mt: 3,
                    mb: 4,
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Box>
        <Dialog open={loading} aria-labelledby="responsive-dialog-title">
          <DialogContent sx={{ py: 6, px: 16 }}>
            <PacmanLoader
              color="#36d7b7"
              cssOverride={{}}
              loading
              margin={7}
              size={30}
              speedMultiplier={0.8}
            />
          </DialogContent>
        </Dialog>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default ResetPassP2;
