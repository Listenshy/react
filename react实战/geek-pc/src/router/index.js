import { Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Layout from "../pages/Layout"

const Routes = [
    {
        path: "/login",
        element: <Login />,
        name: "111"

    },
    {
        path: "/layout",
        element: <Layout />,

    },
    {
        path: "/",
        element: <Navigate to="/login" />
    }
]

export default Routes