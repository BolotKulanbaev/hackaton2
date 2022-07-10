import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { flowersContext } from "../../contexts/flowersContext";
import FlowersCard from "../FlowersCard/FlowersCard";
import { useNavigate, useSearchParams } from "react-router-dom";
// import styles from "./FlowersList.module.css";
import "../FlowersList/FlowersList.css";

import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "18000 $",
    imgPath:
      "https://iloveyouflowers.ru/thumb/2/pKRT2be43tXIOJ0MufEL1w/580r864/d/img_8599.jpg",
  },
  {
    label: "12999 $",
    imgPath:
      "https://iloveyouflowers.ru/thumb/2/Shsbrshq_KHghaiyx0KqKQ/580r864/d/7c1abd12-f732-490d-bf59-487c3234fcd5.jpg",
  },
  {
    label: "11111 $",
    imgPath:
      "https://iloveyouflowers.ru/d/d52801a5-2046-4c2d-8e6a-8eedfda632ff.jpg",
  },
  {
    label: "9999 $",
    imgPath:
      "https://iloveyouflowers.ru/thumb/2/rhZuLBZNnmVZCjr2foY8jw/580r864/d/31304ebfa4558b1fa8617c9b29765abc.jpg",
  },
];

const FlowersList = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
  const { flowers, getFlowers, pages } = useContext(flowersContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 100000]);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 4,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getFlowers();
  }, [searchParams]);

  return (
    <Container className="container">
      <Grid container spacing={10} className="wrapper">
        <Grid item xs={12} sm={6} md={4}>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img
                  src="https://iloveyouflowers.ru/thumb/2/k-m64Bsvt90aB5nyzXOp_Q/580r864/d/609a4226-dc9f-4624-a566-053773910e8d.jpg"
                  alt="123"
                />
                <h3>Delivery</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <Typography>
                  Do you want free delivery and beautiful design? Then order
                  more than 1000$ and we will do everything for you
                </Typography>

                <Button className="more" onClick={() => navigate("/more")}>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img
                  src="https://iloveyouflowers.ru/thumb/2/WBnHsNisaa2AbjuGsUC9PA/580r864/d/whatsapp_image_2022-06-09_at_184958.jpg"
                  alt="123"
                />
                <h3>Wedding</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <Typography>
                  A wedding is one of the most long-awaited days in the life of
                  all girls, and everything on this day should be the best,
                </Typography>
                <Button className="more" onClick={() => navigate("/more")}>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img
                  src="https://iloveyouflowers.ru/thumb/2/DioOGmlp1JishbonwcngHw/580r864/d/snimok_ekrana_2022-05-18_v_152145.png"
                  alt="123"
                />
                <h3>Discounts</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <Typography>
                  Tell all your friends about us and you will get cool discounts
                  on future purchases. Every tenth bouquet is free
                </Typography>
                <Button className="more" onClick={() => navigate("/more")}>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="carusel">
        <Typography variant="h2">
          Only Today:{" "}
          <img
            src="https://www.gifki.org/data/media/111/strelka-animatsionnaya-kartinka-0337.gif"
            alt="123"
          />
        </Typography>

        <Box className="carusel-box" sx={{ maxWidth: "90%", flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}>
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      display: "block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>

      <Box>
        <TextField
          className="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Search..."
          variant="standard"
          fullWidth
          type="search"
        />
        <Box>
          <Typography variant="h6">
            Sort by price: from {price[0]} to {price[1]}
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={(event, value) => {
              setPrice(value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
            step={50}
          />
        </Box>
      </Box>
      <Grid spacing={2} container className="cardsFlow">
        {flowers.map(item => (
          <FlowersCard key={item.id} item={item} />
        ))}
      </Grid>
      <Box className="flow_pagination">
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default FlowersList;
