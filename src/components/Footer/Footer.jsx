import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="foot_text">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" align="center">
            Kulanbaev Bolot
          </Typography>
          <Typography variant="h6" align="center">
            kulanbaev.bolot11@gmail.com
          </Typography>
          <Typography variant="h4" align="center">
            Makers 2022
          </Typography>
          <Typography variant="h6" align="center">
            JS 21
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
