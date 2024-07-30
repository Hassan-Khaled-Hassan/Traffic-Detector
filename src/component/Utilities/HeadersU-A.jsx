import { DownloadOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const HeadersUA = ({screenWidth,open,head,text,isbtn}) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 45px)"
            : `calc(100% - 120px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
        pb: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ pl: "6px" }}>
        <Typography
          variant="h5"
          component="h5"
          color="rgb(3, 169, 244)"
          sx={{ fontWeight: "bold" }}
        >
          {head}
        </Typography>
        <Typography variant="subtitle1" component="h4">
          {text}
        </Typography>
      </Box>
      {isbtn === true ?<Box sx={{ pl: "6px" }}>
        <Button
          variant="contained"
          startIcon={<DownloadOutlined />}
          sx={{ height: "45px", margin: "auto" }}
        >
          download
        </Button>
      </Box>:null}
    </Box>
  );
};

export default HeadersUA;