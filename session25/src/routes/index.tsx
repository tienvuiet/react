import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


//cach import thong thuong
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
// import DefaultLayout from "../layouts/DefaultLayout";
// import Profile from "../pages/Profile";
// import Order from "../pages/Order";
// import ChangePassword from "../pages/ChangePassword";
// import NotFound from "../pages/NotFound";
// import Product from "../pages/Product";
// import ProductDetail from "../pages/ProductDetail";
// import Login from "../pages/Login";


//cach import theo lazy
const Home = React.lazy(()=> import("../pages/Home"))
const About = React.lazy(()=> import("../pages/About"))
const Contact = React.lazy(()=> import("../pages/Contact"))
const routers = createBrowserRouter([
  {
    path: "/",
    element: (  
      <Suspense fallback={<div>Loading...</div>}>  
        <Home/>
      </Suspense>
    )
  },
  {
    path: "/about/:aboutId/:aboutName",  //dynamic route
    element: (  
      <Suspense fallback={<div>Loading...</div>}>  
        <About/>
      </Suspense>
    )
  },
  {
    path: "/contact",
   element: (  
      <Suspense fallback={<div>Loading...</div>}>  
        <Contact/>
      </Suspense>
    )
  },
  {
    path: "/user",
    element: <DefaultLayout />,
    children: [
      {
        index: true,// chi dinh se la noi dung cua trang /user
        // path:"profile",
        element: <Profile />
      },
      {
        path: "order",
        element: <Order />
      },
      {
        path: "change-password",
        element: <ChangePassword />
      }
    ]
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/product-detail",
    element: <ProductDetail />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <NotFound />
  }
])
export default routers