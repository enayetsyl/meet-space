import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/", element: <Home/>
      }
    ]
  },
  {
    path:"/dashboard",
    element: <DashboardLayout/>,
    children:[
      {
        path: "/dashboard", element: <Dashboard/>
      } 
    ]
  }
]);

export default router;