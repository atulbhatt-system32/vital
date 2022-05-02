import React from "react";
import GradientBtn from "../Buttons/GradientButton/GradientBtn";
import styles from "./Ocassion.module.scss";
import Gift from "../../assets/img/gift.svg";

export default function Ocassion() {
  return (
    <div className={styles.ocassion}>
      <div className={styles.ocassion_img_wrap}>
        <img src={Gift} alt="gift" />
      </div>
      <div className={styles.ocassion_content_wrap}>
        <span className={styles.ocassion_title}>Birthday</span>
        <p className={styles.ocassion_description_first}>
          Create your kitty for all types of needs: Wedding, birthday,
          retirement, medical support or simply for common expenses.
        </p>
        <p className={styles.ocassion_description_second}>
          And invite your friends, family or entourage to participate in the
          simplest way
        </p>
      </div>
      <div className={styles.ocassion_btn}>
        <GradientBtn text="See all personal projects" />
      </div>
    </div>
  );
}
