import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashboard/DashboardPage.jsx';
import ChatPage from "./routes/chatPage/chatPage.jsx";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.jsx';
import SignInPage from './routes/signInPage/signInPage.jsx';
import SignUpPage from './routes/signUpPage/signUpPage.jsx';


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path:"/",
        element: <Homepage />
      },
      {
        path:"/sign-in/*",
        element: <SignInPage />
      },
      {
        path:"/sign-up/*",
        element: <SignUpPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element:<DashboardPage/>
          },
          {
            path: "/dashboard/chats/:id",
            element:<ChatPage/>
          }
        ]
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
