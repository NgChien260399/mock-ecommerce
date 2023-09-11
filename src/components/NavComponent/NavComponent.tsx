import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
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
  const numberItemCart = useSelector((state: any) =>
    state.cartItemReduceer.reduce((acc: any, item: any) => {
      return (acc = acc + item.qty);
    }, 0)
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
        <div className={`container-fluid ${styles.header}`}>
          <div className="row h-100 justify-content-between">
            <div className="d-lg-none my-auto col-1">
              <NavLink to="/">
                <div className={styles.img}>
                  <img
                    src="http://localhost:5173\public\images\logo-graceful-2.svg"
                    alt=""
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-6 d-lg-block d-none my-auto">
              <div className={styles.menu_left}>
                <NavLink to="/">
                  <div className={styles.img}>
                    <img
                      src="http://localhost:5173\public\images\logo-graceful-2.svg"
                      alt=""
                    />
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
                    <NavLink style={{ color: "red" }} to="/product/8TS23S004">
                      1
                    </NavLink>
                  </div>
                  <div>
                    <NavLink style={{ color: "red" }} to="/product/8TS23S021">
                      2
                    </NavLink>
                  </div>
                  <div>
                    <NavLink style={{ color: "red" }} to="/product/8TH23S003">
                      3
                    </NavLink>
                  </div>
                  <div>
                    <NavLink style={{ color: "red" }} to="/product/8TA23S002">
                      4
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-6 my-auto">
              <div className={styles.menu_right}>
                <div className={`${styles.search} d-none d-sm-block my-auto`}>
                  <div className={styles.search_input_group}>
                    <button className={styles.search_btn}></button>
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className={styles.search_input}
                    />
                  </div>
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
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default NavComponent;
