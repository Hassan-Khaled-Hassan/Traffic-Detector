import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ResetPassP3Func from "./ResetPassP3Func";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
const ResetPassP3 = ({ mode, screenWidth }) => {
    const [
      regPassword,
      showPassword,
      theme,
      errors,
      register,
      handleSubmit,
      handleClick,
      handleTogglePasswordVisibility,
      loading,
    ] = ResetPassP3Func();
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
            Reset New Password
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
                  sx={{ mb: 3 }}
                  type={showPassword ? "text" : "password"}
                  error={errors.pass}
                  helperText={
                    errors.pass
                      ? errors.pass.type === "required"
                        ? "This field is required."
                        : errors.pass.type === "pattern"
                        ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                        : null
                      : null
                  }
                  {...register("pass", {
                    required: true,
                    pattern: regPassword,
                  })}
                  label="set Your Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={{ mb: "12px" }}
                type={showPassword ? "text" : "password"}
                error={errors.confirmpass}
                helperText={
                  errors.confirmpass
                    ? errors.confirmpass.type === "required"
                      ? "This field is required."
                      : errors.confirmpass.type === "pattern"
                      ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                      : null
                    : null
                }
                {...register("confirmpass", {
                  required: true,
                  pattern: regPassword,
                })}
                label="Confirm Your Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
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

export default ResetPassP3;
