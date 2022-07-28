import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";

const Routes = [
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/home",
        element: <Home />,
        children: [{
            path: "message",
            element: <Message />,
            children: [{
                path: "detail/:id/:title/:content",
                element: <Detail />
            }]
        },
        {
            path: "news",
            element: <News />
        }]
    },
    {
        path: "/",
        element: <Navigate to="/about" />,
    }
]

export default Routes

