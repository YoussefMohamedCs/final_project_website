import logo from './logo.svg';
import './App.css';
import Cursor from "../src/Components/Cursor/Cursor"

import { createBrowserRouter, Navigate, RouterProvider  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginSignup from './Pages/Login&SignUp/LoginSignup';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';
import Aboutus from './Pages/AboutUs/Aboutus';
import Faculties from './Pages/Faculties/Faculties';

function App() {

  let router = createBrowserRouter([
      {path : 'auth' , element : <LoginSignup />} ,
   { path : '' , element : <Layout /> , children :[
  {path : '/' , element : <Home /> } ,
    {path :"about-us" , element: <Aboutus />} ,
    {path : "faculties" , element : <Faculties />}
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
