import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between mx-9 my-8 ">
      <div className="cursor-pointer"> 
        <Link className="text-lg " href={"/"}>IamJackie</Link>
      </div>
      <div className="space-x-4 ">
        {links.map((link) => (
          <Link className="hover:text-cyan-500 cursor-pointer" href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
       <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer px-3 py-0 rounded-md">Sign In</button>
      </div>

    </div>
  );
}

export default Navbar;
