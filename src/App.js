import logo from './logo.svg';
import './App.css';
import Cursor from "../src/Components/Cursor/Cursor"

import { createBrowserRouter, Navigate, RouterProvider  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginSignup from './Pages/Login&SignUp/LoginSignup';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';

function App() {

  let router = createBrowserRouter([
      {path : 'auth' , element : <LoginSignup />} ,
   { path : '' , element : <Layout /> , children :[
  {path : '/' , element : <Home /> } ,
    ]
    
  }
  
  ])
  return (
    <>
    {/* <Cursor /> */}
    <RouterProvider router={router} />
    </>
  );
}

export default App;
