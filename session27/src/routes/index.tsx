import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import TaskList from "../pages/TaskList";
import TaskDetail from "../pages/TaskDetail";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import PostDetail from "../pages/PostDetail";
import { Suspense } from "react";
import Login from "../pages/ex8/Login";
import Register from "../pages/ex8/Register";
import Trangchu from "../pages/ex7/Trangchu";
import Tuychon from "../pages/ex7/Tuychon";
import None from "../pages/ex7/None";
// import Product from "../pages/Product";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/products",
        element: <ProductList />,
    },
    {
        path: "/products/:id",
        element: <ProductDetail />,
    },
    {
        path:"/tasks",
        element:<TaskList/>
    },
    {
        path:"/tasks/:id",
        element:<TaskDetail/>
    },
    {
        path:"/blog",
        element:<Blog/>,
        children:[  
            {
                index: true,
                element:<Post/>
            },
            {
                path:"post/:id",
                element:<PostDetail/>
            }
        ]
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Register />
            </Suspense>
        ),
    },
    {
        path:"/trangchu",
        element:<Trangchu/>
    },
    {
        path:"/tuychon",
        element:<Tuychon/>
    },
    {
        path:"*",
        element:<None/>
    }

])
export default routers