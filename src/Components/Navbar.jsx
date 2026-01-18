import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary px-4 md:px-10">
      <div className="flex justify-between items-center h-16">

        {/* Logo */}
        <img src={logo} alt="Logo" className="w-28" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-bold text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/adventures">Adventures</NavLink>
          <NavLink to="/eco">Eco Tourism</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 pb-4 font-bold text-white">
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/adventures">Adventures</NavLink>
          <NavLink  to="/eco">Eco Tourism</NavLink>
          <NavLink  to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  );
}
