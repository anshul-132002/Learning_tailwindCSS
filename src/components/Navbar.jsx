import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between">
      
      
  
      <div className="flex px-6 py-3 justify-start items-center gap-5">
      <Link to={"/"}>
       <img
          src="/public/Assets/Logo.svg"
          alt=""
          className="size-20 rounded-full "
        />
      </Link>
      
      
       
        <button className="rounded-full font-semibold text-xs text-white bg-gradient-to-l from-blue-200 to-yellow-400 px-2.5 py-1.5">
          Hoster is Hiring
        </button>
        <Link to={"/login"}> <button className="rounded-full font-semibold text-xs text-white bg-gradient-to-l from-blue-200 to-yellow-400 px-2.5 py-1.5">
       Login Form
        </button>
        </Link>
       
      </div>
      
      <div className="hidden lg:flex justify-center items-center font-lato text-gray-400  ">
        <ul className=" lg:flex gap-6" >
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Find Domain</a>
          </li>
          <li>
            <a href="#">Why Hoster</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-6 mx-4 font-lato">
        <Link to={"/login"} className="  text-gray-400">Sign In</Link>
        <button className=" bg-blue-500 px-4 py-3  text-white font-lato font-medium rounded-md">Join WaitList</button>
      </div>
      <div className="flex justify-end items-center px-6 py-3 lg:hidden">
        <TfiAlignJustify />
      </div>
    </nav>
  );
}

export default NavBar;
