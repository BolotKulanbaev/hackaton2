import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Badge, TextField } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import { flowersContext } from "../../contexts/flowersContext";
import Logo from "../img/1222.gif";
import "../Header/Header.css";

const Header = () => {
  const { getFlowers } = React.useContext(flowersContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [search, setSearch] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = React.useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  React.useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
    });
  }, [search, currentPage]);

  React.useEffect(() => {
    getFlowers();
  }, [searchParams]);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="top_header">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="top_header_block">
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(
                    location.pathname === "/flowers"
                      ? `/flowers${window.location.search}`
                      : "/flowers"
                  );
                }}>
                <Typography textAlign="center">Flowers</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/add-flowers");
                }}>
                <Typography textAlign="center">Add Flowers</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            flowers mini
          </Typography> */}
          <img
            className="logo"
            component="a"
            onClick={() => navigate("/flowers")}
            src={Logo}
            alt="logo"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate(
                  location.pathname === "/flowers"
                    ? `/flowers${window.location.search}`
                    : "/flowers"
                );
              }}
              sx={{ my: 2, color: "white", display: "block" }}>
              Flowers
            </Button> */}
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/add-flowers");
              }}
              sx={{ my: 2, color: "white", display: "block" }}>
              Add Flowers
            </Button>

            {/* <Typography
              variant="h3"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              Flowers-big
            </Typography> */}
            {/* <img
              className={styles.logo}
              component="a"
              onClick={() => navigate("/")}
              src={Logo}
              alt="das"
            /> */}
          </Box>
          <Box>
            <IconButton
              onClick={() => navigate("/cart")}
              aria-label="Add to shopping cart">
              {" "}
              <Badge badgeContent={count} color="error">
                <AddShoppingCartIcon style={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
