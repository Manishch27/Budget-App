import React from 'react';
import Error from './Components/Error';
import Dashboard, { dashboardLoader } from './Components/Dashboard';
import Main, { mainLoader } from './layouts/main';
import { logoutAction } from './actions/logout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element:<Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error/>
      },

      {
        path: "/about",
        element: <p>About</p>
      },

    ]
  },
  {
    path: "/logout",
    action: logoutAction
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App