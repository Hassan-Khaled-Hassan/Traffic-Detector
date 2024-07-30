import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import Headers from "../Utilities/Headers";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
const ContactUs = () => {
  return (
    <Box>
      <Container
        id="Contact-US"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          flexGrow: 1,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Headers
          head="Contact Us"
          desc="Quickly build an effective pricing table for your potential customers
        with this layout."
          name="It's built with default Material UI components with little
        customization."
        />
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="first-name"
              name="first-name"
              type="name"
              label="first name"
              variant="outlined"
              autoComplete="first name"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="last-name"
              name="last-name"
              type="last-name"
              label="last name"
              variant="outlined"
              autoComplete="last name"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Your email"
              variant="outlined"
              autoComplete="email"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <TextField
              id="address"
              name="address"
              type="address"
              label="address"
              variant="outlined"
              autoComplete="address"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} className="text-area">
            <TextField
              id="address"
              name="address"
              type="text"
              label="write your message"
              variant="outlined"
              autoComplete="address"
              required
            />
          </FormGrid>
          <FormGrid
            item
            xs={12}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                width: "220px",
                borderRadius: " 999px",
                p: "10px 30px",
                background:
                  "linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)",
                color: "white",
                "&:hover": {
                  boxShadow:
                    "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
                },
              }}
            >
              Submit
            </Button>
          </FormGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
