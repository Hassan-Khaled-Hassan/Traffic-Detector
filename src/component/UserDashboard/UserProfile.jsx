import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import UseProfileHook from "./UseProfileHook";
import { useTheme } from "@emotion/react";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { ThreeCircles } from 'react-loader-spinner';
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function UserProfile({ open, screenWidth, mode }) {
  const [
    user,
    regEmail,
    register,
    handleSubmit,
    errors,
    handleClick,
    showPassword,
    handleTogglePasswordVisibility,
    regPassword,
    loading,
  ] = UseProfileHook();
  const theme = useTheme();
  console.log(user);
    const [imageSrc, setImageSrc] = useState("https://iili.io/JGbBCox.jpg");

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const triggerFileInput = () => {
      document.getElementById("imageInput").click();
    };
  //#FCFCFD
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
      {screenWidth > 900 ? (
        <Grid
          item
          xs={false}
          sm={4}
          md={3.5}
          component={Paper}
          elevation={6}
          sx={{
            backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
            borderRadius: "20px",
            boxShadow:
              "#27598bc4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                py: "44%",
                mx: screenWidth > 1000 ? 3 : 1.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  mx: open ? "auto" : "5px",
                  my: 1,
                  width: open ? 88 : 100,
                  height: open ? 88 : 100,
                  border: "2px solid grey",
                  cursor: "pointer",
                }}
                alt="Remy Sharp"
                src={imageSrc}
                onClick={triggerFileInput}
              />
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
              <Typography
                align="center"
                sx={{
                  fontSize: open ? "17px" : "25px",
                }}
              >
                {user.name}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    padding: "20px",
                    paddingTop: "8px",
                    pr: "0",
                    color: "rgb(151, 161, 186)",
                  }}
                >
                  end Date :
                </Typography>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    padding: "20px",
                    paddingTop: "8px",
                    pl: "8px",
                    color: theme.palette.secondary.main,
                    fontWeight: "bold",
                  }}
                >
                  10/2/2024
                </Typography>
              </Box>
              <Box sx={{ width: "100%", margin: "auto" }}>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    padding: "20px",
                    paddingTop: "8px",
                  }}
                >
                  Recommended dimensions: 200x200, maximum file size: 5MB
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ) : null}
      <Grid
        item
        xs={12}
        sm={screenWidth > 900 ? 7 : 12}
        md={8}
        component={Paper}
        elevation={6}
        sx={{
          backgroundColor: mode === "dark" ? "rgb(16, 24, 38)" : "#f1f1f1",
          borderRadius: "20px",
          boxShadow:
            "#27598bc4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "40px",
          }}
        >
          {screenWidth > 900 ? (
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          ) : null}
          {screenWidth > 900 ? (
            <Typography
              component="h1"
              variant="h5"
              sx={{ display: screenWidth > 900 ? "block" : "none" }}
            >
              Account Details
            </Typography>
          ) : null}
          {screenWidth > 900 ? null : (
            <Box
              sx={{
                p: "0%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Avatar
                sx={{
                  mx: open ? "auto" : "5px",
                  my: 1,
                  width: open ? 88 : 80,
                  height: open ? 88 : 80,
                  border: "2px solid grey",
                }}
                alt="Remy Sharp"
                src="https://iili.io/JGbBCox.jpg"
              />
              <Box
                sx={{
                  pt: "4%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: screenWidth > 600 ? "row" : "column",
                    justifyContent:
                      screenWidth > 600 ? "space-between" : "flex-start",
                  }}
                >
                  <Typography
                    //align="center"
                    sx={{
                      fontSize: open ? "17px" : "20",
                      paddingLeft: "10px",
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Box
                    sx={{
                      //width: "100%",
                      //margin: "auto",
                      display: "flex",
                      paddingLeft: "10px",
                    }}
                  >
                    <Typography
                      //component="h1"
                      variant="subtitle1"
                      align="center"
                      sx={{
                        textAlign: "center",
                        // padding: "20px",
                        //paddingTop: "8px",
                        pr: "0",
                        color: "rgb(151, 161, 186)",
                      }}
                    >
                      end Date :
                    </Typography>
                    <Typography
                      //component="h1"
                      variant="subtitle1"
                      sx={{
                        textAlign: "center",
                        // padding: "20px",
                        // paddingTop: "8px",
                        // pl: "8px",
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                      }}
                    >
                      10/2/2024
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  sx={{
                    ps: "5px",
                    paddingTop: "3px",
                    pl: "5px",
                    color: "rgb(151, 161, 186)",
                  }}
                >
                  Recommended dimensions: 200x200, maximum file size: 5MB
                </Typography>
              </Box>
            </Box>
          )}
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
              Name
            </Typography>
            <TextField
              error={errors.FirstName}
              helperText={
                errors.FirstName
                  ? `This field is required , min 3 and max 20.`
                  : null
              }
              {...register("FirstName", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Name"
              id="Name"
              size="small"
              autoComplete="Name"
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              Address
            </Typography>
            <TextField
              error={errors.Address}
              helperText={
                errors.Address ? `Please enter a valid Address.` : null
              }
              {...register("Address", {
                required: true,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Address"
              id="Address"
              size="small"
              autoComplete="Address"
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
                mb: "5px",
              }}
            >
              Email
            </Typography>
            <TextField
              error={errors.Email}
              helperText={
                errors.Email ? `Please enter a valid email address.` : null
              }
              {...register("Email", {
                required: true,
                pattern: regEmail,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Email"
              id="Email"
              size="small"
              autoComplete="Email"
            />
            <Typography
              sx={{
                fontSize: "16px",
                marginTop: "16px",
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
              id="Password"
              size="small"
              autoComplete="Password"
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
              Car_License
            </Typography>
            <TextField
              error={errors.Car}
              helperText={
                errors.Car
                  ? `Please enter a valid Car License, min 5 and max 20.`
                  : null
              }
              {...register("Car", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Car License"
              id="Car"
              size="small"
              autoComplete="Car"
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
        </Box>
      </Grid>
    </Grid>
  );
}
