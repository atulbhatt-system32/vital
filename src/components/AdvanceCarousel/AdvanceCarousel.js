import React from "react";
import styles from "./AdvanceCarousel.module.scss";
import { cake, heart, person, money } from "../../assets/img";

export default function AdvanceCarousel() {
  return (
    // ADVANCE CAROUSEL:
    <div className={styles.AdvanceCarousel}>
      {/* CAROUSEL WRAP */}
      <div className={styles.AdvanceCarousel_wrap}>
        {/* CAROUSEL IMAGE */}
        <img className={styles.AdvanceCarousel_img} src={cake} alt="cake" />
        {/* CAROUSEL CONTENT WRAP */}
        <div className={styles.AdvanceCarousel_body_wrap}>
          {/* CAROUSEL TEXT WRAP */}
          <div className={styles.AdvanceCarousel_textWrap}>
            <span className={styles.AdvanceCarousel_title}>
              Lorem Ipsum is dummy
            </span>
            <p className={styles.AdvanceCarousel_info}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          {/* ADDITIONAL */}
          <div className={styles.AdvanceCarousel_additional}>
            {/* HEART */}
            <div className={styles.AdvanceCarousel_additional_heart}>
              <img src={heart} alt="heart" />
              <span>30</span>
            </div>
            {/* PERSON */}
            <div className={styles.AdvanceCarousel_additional_person}>
              <img src={person} alt="person" />
              <span>30</span>
            </div>
            {/* MONEY */}
            <div className={styles.AdvanceCarousel_additional_money}>
              <img src={money} alt="money" />
              <span>30</span>
            </div>
          </div>

          {/* CAROUSEL BAR */}
          <div className={styles.AdvanceCarousel_barWrap}>
            <div className={styles.AdvanceCarousel_barContainer}>
              <div className={styles.AdvanceCarousel_bar}>
                <span className={styles.AdvanceCarousel_current}>
                  $50,000 raised
                </span>
                <span className={styles.AdvanceCarousel_total}>
                  Goals: $50,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
