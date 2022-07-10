import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { flowersContext } from "../../contexts/flowersContext";
import Loader from "../Loader/Loader";
import "../EditFlowers/EditFlowers.css";

const EditFlowers = () => {
  const { getOneFlowers, oneFlowers, updateFlowers } =
    useContext(flowersContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneFlowers(id);
  }, []);
  useEffect(() => {
    if (oneFlowers) {
      setTitle(oneFlowers.title);
      setDescription(oneFlowers.description);
      setPrice(oneFlowers.price);
      setImage(oneFlowers.image);
    }
  }, [oneFlowers]);

  function handleSave() {
    const editedFlowers = {
      title,
      description,
      price,
      image,
    };
    updateFlowers(id, editedFlowers);
    navigate("/flowers");
  }
  return oneFlowers ? (
    <Container maxWidth="sm">
      <Box
        className="edit-flow-box"
        display={"flex"}
        flexDirection={"column"}
        marginTop={"30px"}>
        <Typography variant="h4">Edit Flowers</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditFlowers;
