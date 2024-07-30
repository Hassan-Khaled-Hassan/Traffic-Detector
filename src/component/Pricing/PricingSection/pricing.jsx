/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Headers from "../../Utilities/Headers";
import UsePriceHook from "./UsePriceHook";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line react/prop-types
const Pricing = ({ valid }) => {
  const [items, handleClick] = UsePriceHook();
  const [segments, setSegments,] = useState([]);
  useEffect(() => {
    if (items.length > 0) {
      const newSegments = items.flatMap((item) =>
        item.description
          .split(".")
          .map((segment) => segment.trim())
          .filter((segment) => segment.length > 0)
      );
      setSegments(newSegments);
    }
  }, [items]);
  console.log(items);
  return (
    <Box>
      <Container
        id="pricing"
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
        {valid === true ? (
          <Headers
            head="Pricing"
            desc="Quickly build an effective pricing table for your potential customers
        with this layout."
            name="It's built with default Material UI components with little
        customization."
          />
        ) : null}
        <Grid container spacing={2}>
          {items.map((tier) => {
            const tierSegments = tier.description
              .split(".")
              .map((segment) => segment.trim())
              .filter((segment) => segment.length > 0);
            return (
              <Grid
                item
                key={tier.id}
                xs={12}
                sm={tier.name === "Enterprise" ? 12 : 6}
                md={4}
                sx={{ width: "100%" }}
              >
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    border: tier.name === "Growth" ? "1px solid" : undefined,
                    borderColor:
                      tier.name === "Growth" ? "primary.main" : undefined,
                    background:
                      tier.name === "Growth"
                        ? "linear-gradient(#033363, #021F3B)"
                        : undefined,
                    boxShadow:
                      "#27598bc4 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: tier.name === "Growth" ? "grey.100" : "",
                      }}
                    >
                      <Typography component="h3" variant="h6">
                        {tier.name}
                      </Typography>
                      {tier.name === "Growth" && (
                        <Chip
                          icon={<AutoAwesomeIcon />}
                          label={"Recommended"}
                          size="small"
                          sx={{
                            background: (theme) =>
                              theme.palette.mode === "light" ? "" : "none",
                            backgroundColor: "primary.contrastText",
                            "& .MuiChip-label": {
                              color: "primary.dark",
                            },
                            "& .MuiChip-icon": {
                              color: "primary.dark",
                            },
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        color: tier.name === "Growth" ? "grey.50" : undefined,
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h2"
                        sx={{ fontSize: "2.2rem" }}
                      >
                        E£
                        {tier.discount > 0
                          ? tier.price - (tier.price * tier.discount) / 100
                          : tier.price}
                      </Typography>
                      {tier.discount > 0 ? (
                        <Typography
                          component="h3"
                          variant="h2"
                          sx={{
                            color: "#4d4d4d",
                            fontSize: "33px",
                            ml: "5px",
                          }}
                        >
                          <del> {tier.price}</del>
                        </Typography>
                      ) : null}
                      <Typography component="h3" variant="h6">
                        &nbsp; Per {tier.type}
                      </Typography>
                    </Box>
                    <Divider
                      sx={{
                        my: 2,
                        opacity: 0.2,
                        borderColor: "grey.500",
                      }}
                    />
                  </CardContent>
                  {tierSegments.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color:
                            tier.name === "Growth"
                              ? "primary.light"
                              : "primary.main",
                        }}
                      />
                      <Typography
                        component="text"
                        variant="subtitle2"
                        sx={{
                          color:
                            tier.name === "Growth" ? "grey.200" : undefined,
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                  <CardActions>
                    <Button
                      fullWidth
                      variant={
                        tier.name === "Growth" ? "contained" : "outlined"
                      }
                      component="a"
                      href="#"
                      onClick={(e) =>
                        handleClick(e, tier.id, tier.price, tier.discount)
                      }
                      type="submit"
                    >
                      {"Pay now"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <ToastContainer/>
    </Box>
  );
};

export default Pricing;
