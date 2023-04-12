import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';


import {createBrowserRouter , RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"mounting",
        element: <Mounting/>
      },
      {
        path:"updating",
        element: <Updating/>
      },
      {
        path:"unmounting",
        element: <Unmounting/>
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  )
