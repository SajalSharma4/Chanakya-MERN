import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Cookies from 'js-cookie';
import CheckAuth from './utils/CheckAuth';
import Guest from './utils/Guest';

const token=Cookies.get('token');

export default createBrowserRouter([
    {
      element: <App/>,
      children:[{
        path: "/",
        //element: token!==undefined ? <Home/>:<Navigate to="/login" replace={true}/>,
        //element:<Home/>,
        element:<CheckAuth>
          <Home/>
        </CheckAuth>,
      },
      {
        path: "/login",
        element:<Guest>
            <Login/>
        </Guest> ,
      },
      {
        path: "/register",
        element: <Guest>
            <Register/>
        </Guest> ,
      }
    ],
    },
    
  ]);