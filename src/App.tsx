import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "./routes/index";
import React from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <hr />
      <BrowserRouter>
        <header>
          <div>
            <div className="img">
              <img src="https://canifa.com/assets/images/logo.svg" alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="women">Nữ</NavLink>
                </li>
                <li>
                  <NavLink to="men">Nam</NavLink>
                </li>
                <li>
                  <NavLink to="child">Trẻ em</NavLink>
                </li>
                <li>
                  <NavLink to="map">Cửa hàng</NavLink>
                </li>
                <li>
                  <NavLink to="login">Tài khoản</NavLink>
                </li>
                <li>
                  <NavLink to="order">Giỏ hàng</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <hr />
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
      <hr />
      <FooterComponent />
    </div>
  );
}

export default App;
