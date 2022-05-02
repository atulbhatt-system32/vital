import React from "react";
import GradientBtn from "../../Buttons/GradientButton/GradientBtn";
import styles from "./AdvanceCard.module.scss";
export default function AdvanceCard(props) {
  return (
    <div className={styles.advance_card}>
      <img className={styles.advance_card_img} src={props.img} alt="play" />

      <div className={styles.advance_card_content_wrap}>
        <h2 className={styles.advance_card_title}>{props.title}</h2>

        <p className={styles.advance_card_description_first}>
          {props.description_first}
        </p>
        <p className={styles.advance_card_description_second}>
          {" "}
          {props.description_second}
        </p>

        <div className={styles.advance_card_btn}>
          <GradientBtn text={props.text} />
        </div>
      </div>
    </div>
  );
}
