import { LoginProvider } from './context/LoginContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import StyledLogin from './components/Login/StyledLogin.jsx';



import App from './App.jsx';
import './index.css';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Login />
    
  },
  {
    path: '/main',
    element: <App />
  },
  {
    path: '/register',
    element: <Registration />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </React.StrictMode>,
)
