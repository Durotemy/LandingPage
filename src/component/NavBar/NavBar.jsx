// import React, { useState } from "react";
// import { logo } from "../../assets";
// import { navLinks } from "../../constants";

// const NavBar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
//   return <div></div>;
// };
// export default NavBar;

// <nav className="w-full py-3 justifybetween overflow-hidden bg-navColor navbar">
//   <div className="pl-5">
//     Logo
//   </div>
//   <img src={'https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg'} alt="hoobank" className="w-[124px] h-[32px]" />
//   <div>
//   <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//     {navLinks.map((nav, index) => (
//       <li
//         key={nav.id}
//         className={`pr-3 mr-3 font-poppins font-normal cursor-pointer text-[16px] ${
//           active === nav.title ? "text-white" : "text-dimWhite"
//         } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//         onClick={""}
//       >
//         <a href={`#${nav.id}`}>{nav.title}</a>
//       </li>
//     ))}
//   </ul>
//   <button>connect</button>
//   </div>

// </nav>

// export default NavBar;
import React from 'react'
import { navLinks } from "../../constants";
const NavBar = () => {
  return (
  <ul className="flex space-x-4">
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        onClick={""}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>
  )
}

export default NavBar
