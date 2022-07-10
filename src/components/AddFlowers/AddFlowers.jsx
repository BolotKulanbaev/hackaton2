import React, { useContext, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { flowersContext } from "../../contexts/flowersContext";
import { useNavigate } from "react-router-dom";
import "../AddFlowers/AddFlowers.css";

const AddFlowers = () => {
  const { createFlowers } = useContext(flowersContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newFlowers = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !image.trim() || !price) {
      alert("Заполните поля!");
    } else {
      createFlowers(newFlowers);
      navigate("/flowers");
    }
  }
  return (
    <Container maxWidth="sm">
      <Box
        className="add-flow-box"
        display={"flex"}
        flexDirection={"column"}
        marginTop={"30px"}>
        <Typography variant="h4">Add Flowers</Typography>
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
  );
};

export default AddFlowers;
