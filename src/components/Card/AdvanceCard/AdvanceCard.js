import Play from "../../../assets/img/play.svg";
// import Charity from "../../../assets/img/charity.svg";
import React from "react";
import GradientBtn from "../../Buttons/GradientButton/GradientBtn";
import styles from "./AdvanceCard.module.scss";
export default function AdvanceCard() {
  return (
    <div className={styles.advance_card}>
      <img className={styles.advance_card_img} src={Play} alt="play" />

      <div className={styles.advance_card_content_wrap}>
        <h2 className={styles.advance_card_title}>Personal projects</h2>

        <p className={styles.advance_card_description_first}>
          Create your kitty for all types of needs: Wedding, birthday,
          retirement, medical support or simply for common expenses.
        </p>
        <p className={styles.advance_card_description_second}>
          {" "}
          And invite your friends, family or entourage to participate in the
          simplest way
        </p>

        <div className={styles.advance_card_btn}>
          <GradientBtn text="View all personal projects" />
        </div>
      </div>
    </div>
  );
}
