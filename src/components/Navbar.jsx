import React from 'react'
import { Button } from "@/components/ui/button";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center">
    <h1 className="font-extrabold text-left line">REAL HOME 
      <br /> 
    <span className="font-light text-sm">Real Estate</span>
    </h1>
    <ul className="navbar-links flex gap-8">
      <li><Link>Home</Link></li>
      <li><Link to="properties">Properties</Link></li>
      <li><Link to="agents">Our Agents</Link></li>
      <li><Link to="contact">Contact Us</Link></li>
    </ul>

    <div className="navbar-auth-links flex gap-4 items-center">
      <FaUserCircle />
      <Link to="/signin">
        <Button>Sign In</Button>
      </Link>
    </div>
  </nav>
  )
}

export default Navbar