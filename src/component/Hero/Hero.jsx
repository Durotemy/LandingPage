import React from "react";
// import {imag, nft2,nft3,nft5} from "../../images"
import nft2 from "../../images/nft2.png";
import nft3 from "../../images/nft3.png";
import nft5 from "../../images/nft5.png";
import img from "../../images/one.jpg";
import style from "./styles.module.css"
const Hero = () => {
  return (
    <div>
      <section className="bg-heroColor px-20 flex mt-9">
        Hero works
        <img src={img} alt="ee" />
        <img src={nft2} alt="ee" />
        <img src={nft3} alt="ee" />
        <img src={nft5} alt="ee" />
      </section>

      <section>
        <div className="flex px-20 mt-10">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold">Art for you</h1>
          </div>
          <input placeholder="Search Art works here" className="ml-6 box-border style.input"/>
          <select>
            <option>Sort by</option>
            <option>Recently Added</option>
            <option>Sort by</option>
          </select>
        </div>
      </section>
      <hr className="px-20"/>
    </div>
  );
};
export default Hero;
