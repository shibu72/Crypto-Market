import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Coins from "../pages/Coins";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/coins",
                element: <Coins/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path: "*",
        element: <div>Page not found</div>
    }
])

export default router;