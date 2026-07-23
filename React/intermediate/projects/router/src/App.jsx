import React from "react";
import { Route, Routes } from "react-router";
import {Home} from "./components/Home"
import {About} from "./components/About"
import {Services} from "./components/Services"
import {Contact} from "./components/Contact"
import {Error} from "./components/Error"
import { NavLink } from "react-router";
import {MainHeader} from "./components/MainHeader"

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<MainHeader/>} >
          <Route index element={<Home/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/services" element={<Services/>} />
          <Route path = "/contact" element={<Contact/>} />
        </Route>
        <Route path = "*" element={<Error/>} />
        
      </Routes>

      <nav>
        <ul>
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/about">About</NavLink>
          </li>
          <li>
             <NavLink to ="/services">Services</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}