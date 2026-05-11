import React from "react";
import { NavLink } from "react-router";
import login_img from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex gap-10 w-11/12 mx-auto">
      <section className="flex gap-5  items-center justify-end pr-35 w-7/10 ">
        <NavLink to="">Home</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Career </NavLink>
      </section>
      <section className="flex gap-5 justify-end   w-3/10">
        <img src={login_img} alt="" />
        <button className="bg-primary text-base-100 px-4 font-bold ">
          login
        </button>
      </section>
    </div>
  );
};

export default Navbar;
