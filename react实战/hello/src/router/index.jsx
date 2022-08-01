import App from "../App";
import List from "../pages/List";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Means from "../pages/Means";
import Register from "../pages/Register";
// 重新命名Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/list" element={<List />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/means" element={<Means />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
);

// const BaseRouter = [
//   {
//     path: "/",
//     element: <App />,
//   },
// ];
export default BaseRouter;
