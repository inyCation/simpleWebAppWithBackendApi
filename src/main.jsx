import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Blog,Contact} from './pages/index.js';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/about",
    element:  <About />,
  },
  {
    path: "/blog",
    element:  <Blog />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
