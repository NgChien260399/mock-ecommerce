import ChildProductPage from "../pages/ChildProductPage/ChildProductPage";
import HomePage from "../pages/HomePage/HomePage";
import MapPage from "../pages/MapPage/MapPage";
import MenProductPage from "../pages/MenProductPage/MenProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import WomenProductPage from "../pages/WomenProductPage/WomenProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
  { path: "/", page: HomePage },
  { path: "/child", page: ChildProductPage },
  { path: "/signin", page: SignInPage },
  { path: "/signup", page: SignUpPage },
  { path: "/map", page: MapPage },
  { path: "/men", page: MenProductPage },
  { path: "/order", page: OrderPage },
  { path: "/women", page: WomenProductPage },
  { path: "*", page: NotFoundPage },
];
