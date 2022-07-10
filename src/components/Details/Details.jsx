import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { flowersContext } from "../../contexts/flowersContext";

import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneFlowers, getOneFlowers } = useContext(flowersContext);
  useEffect(() => {
    getOneFlowers(id);
  }, []);
  return oneFlowers ? (
    <Container>
      <Box>
        <Typography variant="h4">{`Flower: ${oneFlowers.title}`}</Typography>
        <Typography variant="h5">{`About flower: ${oneFlowers.description}`}</Typography>
        <Typography variant="h4">{`Price: ${oneFlowers.price} $`}</Typography>
        <img src={oneFlowers.image} width="50%" alt="flowers" />
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
