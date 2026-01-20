import { Link, NavLink } from "react-router";
import { use, useState } from "react";
import logo from "../assets/logo.png";
import { Context } from "../Context/Context";
import Loader from "./Loader";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {firebaseLoading,user} = use(Context)
  

  return (
    <nav className="bg-primary px-4 md:px-10">
      <div className="flex justify-between items-center h-16">
       <Link to='/'><img src={logo} alt="Logo" className="w-28" /></Link>
        <div className="hidden md:flex gap-10 items-center font-bold text-white">
          <NavLink to="/">Home</NavLink>
          <a href="#adventures">Adventures</a>
          {firebaseLoading?(<Loader/>):user?(<NavLink  to="/profile"><img className="w-12 rounded-full" src={user?.photoURL || 'https://i.ibb.co.com/vCzVBYTz/images.png'} alt="" /></NavLink>):<NavLink  to="/sign_in">Login</NavLink>}
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
          <a href="#adventures">Adventures</a>
          {firebaseLoading?(<p>loading--------</p>):user?(<NavLink  to="/profile">Profile</NavLink>):<NavLink  to="/sign_in">Login</NavLink>}
          
        </div>
      )}
    </nav>
  );
}
