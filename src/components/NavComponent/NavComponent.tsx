import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { routes } from "../../routes";
import "./NavComponent.css";

const NavComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Container maxWidth="xl">
          <div className="header">
            <div className="menu-left">
              <NavLink to="/">
                <div className="img">
                  <img src="https://canifa.com/assets/images/logo.svg" alt="" />
                </div>
              </NavLink>
              <div className="menu">
                <div>
                  <NavLink to="women">Nữ</NavLink>
                </div>
                <div className="dropdown">
                  <NavLink to="men">Nam</NavLink>
                  <div className="dropdown-content">
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                    <NavLink to="men/clothing">Quần áo</NavLink>
                    <NavLink to="men/shoes">Giày</NavLink>
                  </div>
                </div>
                <div>
                  <NavLink to="child">Trẻ em</NavLink>
                </div>
                <div>
                  <NavLink to="/">Giá tốt</NavLink>
                </div>
                <div>
                  <NavLink to="/">Canifa Z</NavLink>
                </div>
              </div>
            </div>
            <div className="menu-right">
              <div className="search">
                <TextField
                  variant="outlined"
                  label={
                    <>
                      {" "}
                      <SearchIcon /> Tìm kiếm
                    </>
                  }
                />
              </div>
              <div className="group-icon">
                <div className="store">
                  <div>
                    <StorefrontIcon />
                  </div>
                  <span>Cửa hàng</span>
                </div>
                <div className="account">
                  <div>
                    <AccountCircleIcon />
                  </div>
                  <span>Tài khoản</span>
                </div>
                <div className="cart">
                  <div>
                    {" "}
                    <ShoppingCartIcon />
                  </div>
                  <span>Giỏ hàng</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.page />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavComponent;
