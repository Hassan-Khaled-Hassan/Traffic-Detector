import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { ThreeCircles } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import UseAddPlanHook from "./UseAddPlanHook";
// eslint-disable-next-line react/prop-types
const AddPlanForm = ({ open, screenWidth, mode }) => {
    const [register, handleSubmit, errors, handleClick, loading] =
      UseAddPlanHook();
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
              console.log(data);
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
              sx={{ mb: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Description
            </Typography>
            <TextField
              error={errors.Description}
              helperText={
                errors.Description
                  ? `This field is required , min 3 and max 20.`
                  : null
              }
              {...register("Description", {
                required: true,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Description"
              id="Name"
              size="small"
              autoComplete="Name"
              sx={{ mb: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Type
            </Typography>
            <TextField
              error={errors.Type}
              helperText={
                errors.Type
                  ? `This field is required , min 3 and max 20.`
                  : null
              }
              {...register("Type", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Type"
              id="Name"
              size="small"
              autoComplete="Name"
              sx={{ mb: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Period in days
            </Typography>
            <TextField
              error={errors.Period}
              helperText={
                errors.Period
                  ? `This field is required , set the period n days.`
                  : null
              }
              {...register("Period", {
                required: true,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Period"
              id="Name"
              size="small"
              autoComplete="Name"
              sx={{ mb: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Price
            </Typography>
            <TextField
              error={errors.Price}
              helperText={
                errors.Price ? `This field is required , set the price.` : null
              }
              {...register("Price", {
                required: true,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Price"
              id="Name"
              size="small"
              autoComplete="Name"
              sx={{ mb: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                mb: "5px",
              }}
            >
              Discount
            </Typography>
            <TextField
              error={errors.Discount}
              helperText={
                errors.Discount
                  ? `This field is required ,set the percentage.`
                  : null
              }
              {...register("Discount", {
                required: true,
              })}
              //sx={{ mb: "12px" }}
              fullWidth
              label="Your Discount"
              id="Name"
              size="small"
              autoComplete="Name"
              sx={{ mb: "10px" }}
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
};

export default AddPlanForm;
