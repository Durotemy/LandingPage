import React from "react";
import { imagesDetails } from "../../constants";
import style from "./Detail.module.css";
const Detail = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        {imagesDetails.map((item) => {
          return (
            <div className={style.cardItem}>
              <div className={style.cardImage}>
                <img className={style.image} src={item.image} alt="img" />
              </div>
              <div className={style.cardContent}>
                <h3 className={style.title}>{item.title}</h3>
                <br />
                <p className={style.text}>{item.text}</p>
                <p className={style.creator}>Creator: {item.creator}</p>
                <div className={style.buttonContainer}>
                  {!item.sold ? (
                    <button className={style.buttonSold}>For Sale</button>
                  ) : (
                    <button className={style.buttonForSale}>Sold</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
