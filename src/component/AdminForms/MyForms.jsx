import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Box, Button, Dialog, DialogContent, IconButton, InputAdornment, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Slide from "@mui/material/Slide";
import { ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import useFormFunc from "./useFormFunc";
const MyForms = ({ open, screenWidth }) => {
  const [
    handleSubmit,
    errors,
    register,
    regEmail,
    regPassword,
    phoneRegExp,
    handleTogglePasswordVisibility,
    showPassword,
    handleClick,
    loading,
  ] = useFormFunc();
    
  // =========================================
    const currencies = [
      {
        label: "Admin",
        value: "1",
      },
      {
        label: "User",
        value: "2",
      },
    ];
// ===============================
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 400,
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 5 }}
        onSubmit={handleSubmit((data) => {
          handleClick(data);
        })}
        noValidate
        autoComplete="false"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
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
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={errors.Email}
            helperText={
              errors.Email ? `Please enter a valid email address.` : null
            }
            {...register("Email", {
              required: true,
              pattern: regEmail,
            })}
            sx={{ flex: 1 }}
            label="Email"
            variant="filled"
          />
        </Stack>
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
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
            sx={{ flex: 1 }}
            label="Password"
            variant="filled"
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
          <TextField label="Address 1" variant="filled" sx={{ flex: 1 }} />
        </Stack>
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={errors.phone}
            helperText={
              errors.phone ? `Please enter a valid mobile number.` : null
            }
            {...register("phone", {
              required: true,
              pattern: phoneRegExp,
            })}
            label="Contact Number"
            variant="filled"
            sx={{ flex: 0.5, mr: "auto", ml: "auto" }}
          />
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "11px 28px", borderRadius: "13px" }}
          >
            Create New Admin
          </Button>
        </Box>
      </Box>
      <Dialog open={loading} aria-labelledby="responsive-dialog-title">
        <DialogContent sx={{ py: 6, px: 16 }}>
          <PacmanLoader
            // color="#36d7b7"
            color="rgb(34 128 189)"
            cssOverride={{}}
            loading
            margin={7}
            size={30}
            speedMultiplier={0.8}
          />
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};

export default MyForms;
