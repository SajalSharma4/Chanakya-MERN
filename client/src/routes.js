import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Cookies from 'js-cookie';

const token=Cookies.get('token');

export default createBrowserRouter([
    {
      element: <App/>,
      children:[{
        path: "/",
        element: token!==undefined ? <Home/>:<Navigate to="/login" replace={true}/>,
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