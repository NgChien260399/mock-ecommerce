import { NavLink } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CAT_Men from "./CAT_men.json";
import CAT_Women from "./CAT_women.json";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartPopup } from "../../redux/actions/DisplayCart.action";
import styles from "./NavComponent.module.css";

interface MenuItem {
  path: string;
  name: string;
}

interface SubmenuProps {
  categoryData: MenuItem[][];
}

const Submenu: React.FC<SubmenuProps> = ({ categoryData }) => {
  return (
    <div className={styles.submenu}>
      <div className={styles.submenu_content}>
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
  const dispatch = useDispatch();
  const numberItemCart = useSelector(
    (state: any) => state.cartItemReduceer.length
  );
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          zIndex: "501",
          top: "0",
          bgcolor: "#fff",
        }}
      >
        <Box className={styles.header}>
          <div className={styles.menu_left}>
            <NavLink to="/">
              <div className={styles.img}>
                <img src="https://canifa.com/assets/images/logo.svg" alt="" />
              </div>
            </NavLink>
            <div className={styles.menu}>
              <div>
                <NavLink to="/women">Nữ</NavLink>
                <Submenu categoryData={CAT_Women} />
              </div>
              <div>
                <NavLink to="/men">Nam</NavLink>
                <Submenu categoryData={CAT_Men} />
              </div>
              <div>
                <NavLink to="/child">Trẻ em</NavLink>
              </div>
              <div>
                <NavLink to="/product/6DS23S006">Demo SP 1</NavLink>
              </div>
              <div>
                <NavLink to="/product/6DS23W023-SE249">Demo SP 2</NavLink>
              </div>
              <div>
                <NavLink to="/product/6TP23W005-SL213">Demo SP 3</NavLink>
              </div>
            </div>
          </div>
          <div className={styles.menu_right}>
            <div className={styles.search}>
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
            <div className={styles.group_icon}>
              <div className={styles.store}>
                <div>
                  <StorefrontIcon />
                </div>
                <span>Cửa hàng</span>
              </div>
              <div className={styles.account}>
                <div>
                  <AccountCircleIcon />
                </div>
                <span>Tài khoản</span>
              </div>
              <div
                className={styles.cart}
                onClick={() => dispatch(toggleCartPopup())}
              >
                <div>
                  {" "}
                  <ShoppingCartIcon />
                </div>
                <span>Giỏ hàng</span>
                <span className={styles.count}>{numberItemCart}</span>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default NavComponent;
