import React from "react";
// import {imag, nft2,nft3,nft5} from "../../images"
import nft2 from "../../images/nft2.png";
import nft3 from "../../images/nft3.png";
import nft5 from "../../images/nft5.png";
import img from "../../images/one.jpg";
import style from "./styles.module.css";
const Hero = () => {
  return (
    <div>
      <section className="bg-heroColor px-20 flex mt-9">
        <img src={nft2} alt="ee" />
        <img src={nft3} alt="ee" />
        <img src={nft5} alt="ee" />
        <img src={nft2} alt="ee" />
        <img src={nft3} alt="ee" />
      </section>

      <section>
        <div className="px-20 mt-10  flex flex-row gap-3">
          <div className="basis-1/2">
            <h1 className="text-white font-bold ">Art for you</h1>
          </div>
          <div className="basis-1/4">
            <input
              placeholder="Search Art works here"
              className=" box-border style.input"
            />
          </div>
          <div className="basis-1/2 ">
            <select className="h-10">
              <option>Sort by</option>
              <option>Recently Added</option>
              <option>Sort by</option>
            </select>
          </div>
        </div>
      </section>
      <hr className="mt-9" />
    </div>
  );
};
export default Hero;
