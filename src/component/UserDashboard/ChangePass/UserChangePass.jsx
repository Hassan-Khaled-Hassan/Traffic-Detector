import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import UseChangePassHook from "./UseChangePassHook";
import { ThreeCircles } from "react-loader-spinner";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function UserChangePass({ open, screenWidth, mode }) {
  const [
    register,
    handleSubmit,
    errors,
    handleClick,
    regPassword,
    handleTogglePasswordVisibility,
    showPassword,
    loading,
  ] = UseChangePassHook();
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "auto",
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
        gap: "20px",
        mb: "50px",
        pb: 5,
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={screenWidth > 900 ? 7 : 12}
        md={11.7}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
          borderRadius: "20px",
          display: "flex",
          width: "100%",
          flexDirection: "row",
          gap: "45px",
          boxShadow:
            "#27598bc4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        {screenWidth > 900 ? (
          <Grid
            item
            xs={false}
            sm={4}
            md={3.5}
            //component={Paper}
            elevation={6}
            sx={{
              backgroundColor: "transparent",
              borderRight: "2px solid",
              borderColor: "divider",
              height: "80%",
              margin: "auto",
            }}
          ></Grid>
        ) : null}
        <Grid
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "40px",
            width: "100%",
          }}
          xs={12}
          sm={screenWidth > 900 ? 7 : 12}
          md={8}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit((data) => {
              handleClick(data);
            })}
            autoComplete="false"
            sx={{ mt: 1, width: "100%" }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Your Password
            </Typography>
            <TextField
              error={errors.Password}
              helperText={
                errors.Password
                  ? errors.Password.type === "required"
                    ? "This field is required."
                    : errors.Password.type === "pattern"
                    ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                    : null
                  : null
              }
              {...register("Password", {
                required: true,
                pattern: regPassword,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Name"
              id="Password11"
              size="small"
              autoComplete="Name"
              type={showPassword ? "text" : "password"}
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
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              New Password
            </Typography>
            <TextField
              error={errors.NewPassword}
              helperText={
                errors.NewPassword
                  ? errors.NewPassword.type === "required"
                    ? "This field is required."
                    : errors.NewPassword.type === "pattern"
                    ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                    : null
                  : null
              }
              {...register("NewPassword", {
                required: true,
                pattern: regPassword,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Address"
              id="NewPassword"
              size="small"
              autoComplete="Address"
              type={showPassword ? "text" : "password"}
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
                    mb: 3,
                  }}
                >
                  <ThreeCircles
                    visible={loading}
                    innerCircleColor="#ffec00"
                    middleCircleColor="#4fa94d"
                    outerCircleColor="red"
                    height="41"
                    width="73"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{ marginRight: "10px" }}
                    wrapperClass=""
                  />
                  Save Changes
                </Button>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
