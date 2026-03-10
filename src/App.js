import logo from './logo.svg';
import './App.css';
import Cursor from "../src/Components/Cursor/Cursor"

import { createBrowserRouter, Navigate, RouterProvider  } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import LoginSignup from './Pages/Login&SignUp/LoginSignup';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';
import Aboutus from './Pages/AboutUs/Aboutus';
import Faculties from './Pages/Faculties/Faculties';
import Cspage from './Pages/CsPage/Cspage';
import MainModel from './Model/MainModel';
import MainMdoelER from './Components/MainModelER/MainMdoelER';
import MainModelQuery from './Components/MainModelQuery/MainModelQuery';
function App() {

  let router = createBrowserRouter([
      {path : 'auth' , element : <LoginSignup />} ,
   { path : '' , element : <Layout /> , children :[
  {path : '/' , element : <Home /> } ,
    {path :"about-us" , element: <Aboutus />} ,
    {path : "faculties" , element : <Faculties />},
   
  
    ]
    
  }
  , {
    path : "faculties/cs" , element : <Cspage /> 
  } ,{
    path : "faculties/cs/assistant" , element : <MainModel /> 
  },{
    path : "faculties/cs/assistant/assistant-er" , element : <MainMdoelER /> 
  },{
    path : "faculties/cs/assistant/assistant-Qr" , element : <MainModelQuery /> 
  }
  
  ] )
  return (
    <>
    {/* <Cursor /> */}
    <RouterProvider router={router} />
    </>
  );
}

export default App;
