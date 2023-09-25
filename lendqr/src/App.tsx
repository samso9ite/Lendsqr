import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import UserDetail from './Pages/UserDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>
  },
  {
    path:'/user-details',
    element:<UserDetail/>
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
