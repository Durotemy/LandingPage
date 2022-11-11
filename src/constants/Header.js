import React from "react";
import NavBar from "../component/NavBar/NavBar";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-10 items-center text-white bg-navColor">
      <section className="flex items-center ">
        <div className="p-4 bg-[#D9D9D9] rounded-full">
          <h2>Logo</h2>
        </div>
        <h1 className="ml-4">Website</h1>
      </section>
      <section className="flex flex-row items-center" >
        <NavBar />
        <div className="p-4 bg-[#D9D9D9] rounded-full">
          <h2></h2>
        </div>
        <div className="p-2 m-2 rounded-md bg-buttonColor">
          <button>Connect</button>
        </div>
      </section>
    </header>
  );
};
export default Header;
