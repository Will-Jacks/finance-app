import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/main',
    element: <App />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
