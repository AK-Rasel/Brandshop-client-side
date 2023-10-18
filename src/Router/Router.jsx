import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddNewProduct from "../Pages/AddNewProduct/AddNewProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/add-new-product",
            element:<AddNewProduct/>
        },
        {
            path:"update-product/:id",
            element:<UpdateProduct/>,
            loader:({params}) => fetch(`http://localhost:5001/products/${params.id}`)
        },
        {
            path:"/product-details/:id",
            element:<ProductDetails/>

        },
        {
            path:'products/:name',
            element:<Products/>,
            loader: () => fetch('http://localhost:5001/products')
        }
      ]
    },
  ])
export default router;