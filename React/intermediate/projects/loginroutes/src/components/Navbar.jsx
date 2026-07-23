import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

export const Navbar = ({loggedIn,setIsLoggedIn}) => {
    
   
    return (
        <div className="bg-black">
           <NavLink>
             <img src={Logo} alt="Image not found" />
           </NavLink>
           <ul className="text-white">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
           <div className="text-white">
            { !loggedIn &&
                <NavLink to ="/login">
                    <button>Login</button>
                </NavLink>
            }
            { !loggedIn &&
                 <NavLink to ="/signup">
                    <button>Signup</button>
                </NavLink>
            }
            {   
            loggedIn &&
                <NavLink to ="/dashboard">
                    <button>Dashboard</button>
                </NavLink>
            }
            {
                loggedIn &&
                <NavLink to ="/">
                    <button onClick={()=> {
                        setIsLoggedIn(false);
                        toast.success("Logout Sucess")
                    }}
                    >Logout</button>
                </NavLink>
            }
           </div>
          
        </div>
    )
}