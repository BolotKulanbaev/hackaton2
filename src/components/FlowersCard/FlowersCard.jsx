import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { flowersContext } from "../../contexts/flowersContext";

import { useNavigate } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Tooltip from "@mui/material/Tooltip";

import "./FlowersCard.css";

export default function FlowersCard({ item }) {
  const { deleteFlowers } = React.useContext(flowersContext);
  const { addToCart, checkProductinCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [productState, setProductState] = React.useState(
    checkProductinCart(item.id)
  );
  return (
    <Grid item xs={8} sm={6} md={6}>
      <Card className="cards">
        <CardMedia
          className="card-img"
          component="img"
          height="250"
          image={item.image}
          alt="product"
        />
        <div className="cart-content">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {`Price: ${item.price} $`}
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Delete" placement="top">
              <Button size="small" onClick={() => deleteFlowers(item.id)}>
                <DeleteSweepIcon fontSize="large" />
              </Button>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                <EditIcon fontSize="large" />
              </Button>
            </Tooltip>
            <Tooltip title="Info" placement="top">
              <Button
                size="small"
                onClick={() => navigate(`/details/${item.id}`)}>
                <InfoIcon fontSize="large" />
              </Button>
            </Tooltip>

            <IconButton
              onClick={() => {
                addToCart(item);
                setProductState(checkProductinCart(item.id));
              }}>
              {/* <AddShoppingCartIcon
          fontSize="large"
          color={productState ? "success" : "primary"}
        /> */}
              {productState ? (
                <Tooltip title="delete from cart" placement="top">
                  <CheckBoxIcon fontSize="large" color="success" />
                </Tooltip>
              ) : (
                <Tooltip title="add to cart" placement="top">
                  <AddShoppingCartIcon fontSize="large" color="primary" />
                </Tooltip>
              )}
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
}
