import Error404 from "./component/404error/Error404";
import Error500 from "./component/500error/Error500";
import Dashboard from "./component/Dashboard/Dashboard";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Project from "./component/ProjectList/Project";
import Ticketlist from "./component/TIcketList/Ticketlist";
import Client from "./component/Client/Client";

export default [
  {
    path:'/',
    element:() => <Dashboard />,
    exact:true,
  },
  {
    path:'/Login',
    element:() => <Login/>,
    exact:true,
  },
  {
    path:'/Register',
    element:() => <Register/>,
    exact:true,
  },
  {
    path:'/Forgot-Password',
    element:() => <ForgotPassword/>,
    exact:true,
  },
  {
    path:'/Error404',
    element:() => <Error404/>,
    exact:true,
  },
  {
    path:'/Error500',
    element:() => <Error500/>,
    exact:true,
  },
  {
    path:'/Project',
    element:() => <Project/>,
    exact:true,
  },
  {
    path:'/Ticket-List',
    element:() => <Ticketlist/>,
    exact:true,
  },
  {
    path:'/Client',
    element:() => <Client/>,
    exact:true,
  }
  
]

