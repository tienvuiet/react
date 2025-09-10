import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Student from "../pages/Student";
import Login from "../pages/Login";
import PrivateRouter from "../pages/PrivateRouter ";
import Account from "../pages/Account";
import Teams from "../pages/Teams";
import TeamIndex from "../pages/TeamIndex";
import Team from "../pages/Team";
import ListProducts from "../pages/ListProducts";
import ProductDeatil from "../pages/ProductDeatil";

const routers = createBrowserRouter([
    {
        path: "/product/:id",
        element: <ProductDetail />
    },
    {
        path: "/student/:name",
        element: <Student />
    },

    {
        path: "/privite-router",
        element: <PrivateRouter />,
    },
    {
        path: "account",
        element: <Account />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "/teams",
        element: <Teams />,
        children: [
            {
                index: true,
                element: <TeamIndex />
            },
            {
                path: ":teamId",
                element: <Team />
            }
        ]
    },
    {
        path:"/list-product",
        element:<ListProducts/>
    },
    {
        path:"/product-detail/:id",
        element:<ProductDeatil/>
    }


])
export default routers