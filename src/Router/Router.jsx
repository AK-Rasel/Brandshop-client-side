import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddNewProduct from "../Pages/AddNewProduct/AddNewProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-new-product",
        element:<PrivetRouter><AddNewProduct /></PrivetRouter> ,
      },
      {
        path: "update-product/:id",
        element:<PrivetRouter><UpdateProduct /></PrivetRouter> ,
        loader: ({ params }) =>
          fetch(`https://automotive-brand-shop-server-side-dkypj1pnz-ak-rasel.vercel.app/product-details/${params.id}`),
      },
      {
        path: "/product-details/:id",
        element:<PrivetRouter><ProductDetails /></PrivetRouter> ,
        loader: ({ params }) =>
          fetch(`https://automotive-brand-shop-server-side-dkypj1pnz-ak-rasel.vercel.app/product-details/${params.id}`),
      },
      {
        path: "/products/:name",
        element:<PrivetRouter><Products /></PrivetRouter> ,
        loader: ({ params }) =>
          fetch("https://automotive-brand-shop-server-side-dkypj1pnz-ak-rasel.vercel.app/products/" + params.name),
      },
      {
        path: "/cart",
        element:<PrivetRouter><Cart /></PrivetRouter> ,
      },
    ],
  },
]);
export default router;
