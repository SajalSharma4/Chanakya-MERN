import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import {
  createBrowserRouter,
} from "react-router-dom";

export default createBrowserRouter([
    {
      element: <App/>,
      children:[{
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      }
    ],
    },
    
  ]);