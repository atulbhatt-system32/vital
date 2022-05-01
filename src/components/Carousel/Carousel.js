import React from "react";
import Cake from "../../assets/img/cake.svg";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_wrapper}>
        <img className={styles.carousel_img} src={Cake} alt="cake" />
        <div className={styles.carousel_textWrap}>
          <span className={styles.carousel_title}>Birthday</span>
          <p className={styles.carousel_info}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className={styles.carousel_barWrap}>
          <div className={styles.carousel_barContainer}>
            <div className={styles.carousel_bar}>
              <span className={styles.carousel_current}>$50,000 raised</span>
              <span className={styles.carousel_total}>Goals: $50,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
