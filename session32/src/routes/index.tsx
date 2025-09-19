import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registed from "../pages/Registed";

const routers =  createBrowserRouter( [ 
    {
        path: "/login",
        element: <Login/>
    },
    {
        path:"/register",
        element: <Registed/>
    }
])
export default routers