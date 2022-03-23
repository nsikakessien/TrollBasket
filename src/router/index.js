import Home from "../views/home";
import Carts from "../views/carts";
import CheckoutSuccess from "../views/success";
import ProductDetails from "../views/products";

export const openRoutes = [
  {
    path: "/home",
    component: <Home />,
    exact: true,
  },
  {
    path: "/",
    component: <Home />,
    exact: true,
  },
  {
    path: "/product/:name/",
    component: <ProductDetails />,
    exact: true,
  },
  {
    path: "/product/cart",
    component: <Carts />,
    exact: true,
  },
  {
    path: "/checkout/success",
    component: <CheckoutSuccess />,
    exact: true,
  },
];
