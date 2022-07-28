import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const Routes = [
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/",
        element: <Navigate to="/about" />,
    }
]

export default Routes

