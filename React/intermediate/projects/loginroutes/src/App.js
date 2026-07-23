import React, {useState} from "react";
import {Home} from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login"
import {Signup} from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard";
import {Navbar} from "./components/Navbar"
import "./App.css"

export const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(true)
  return (
    <div>
     
      <Navbar loggedIn = {loggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path ="/" element={<Home/>} /> 
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}