import { Box, Typography } from '@mui/material';


const Headers = ({head,desc,name}) => {
  return (
    <Box
      sx={{
        width: { sm: "100%", md: "65%" },
        textAlign: { sm: "left", md: "center" },
        px:3
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{ textAlign: "center" }}
      >
        {head}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        {desc}
        {name !== "" ? <br /> : null}
        {name !== "" ? name : null}
      </Typography>
    </Box>
  );
}

export default Headers