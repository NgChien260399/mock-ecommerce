import { NavLink } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavComponent.css";
import CAT_Men from "./CAT_men.json";
import CAT_Women from "./CAT_women.json";

interface MenuItem {
  path: string;
  name: string;
}

interface SubmenuProps {
  categoryData: MenuItem[][];
}

const Submenu: React.FC<SubmenuProps> = ({ categoryData }) => {
  return (
    <div className="submenu">
      <div className="submenu-content">
        {categoryData.map((subMenuItems, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
            {subMenuItems.map((item, itemIndex) => (
              <NavLink key={itemIndex} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </Box>
        ))}
      </div>
    </div>
  );
};

const NavComponent = () => {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          zIndex: "501",
          top: "44px",
          bgcolor: "#fff",
        }}>
        <Box className="header">
          <div className="menu-left">
            <NavLink to="/">
              <div className="img">
                <img src="https://canifa.com/assets/images/logo.svg" alt="" />
              </div>
            </NavLink>
            <div className="menu">
              <div>
                <NavLink to="women">Nữ</NavLink>
                <Submenu categoryData={CAT_Women} />
              </div>
              <div>
                <NavLink to="men">Nam</NavLink>
                <Submenu categoryData={CAT_Men} />
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
        </Box>
      </Box>
    </>
  );
};

export default NavComponent;
