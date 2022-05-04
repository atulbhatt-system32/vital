import React from "react";
import GradientBtn from "../Buttons/GradientButton/GradientBtn";
import styles from "./Ocassion.module.scss";
import Gift from "../../assets/img/gift.svg";
import OcassionBoxes from "./Ocassion_boxes/Ocassion_boxes";
import BirthdayWedding from "../../assets/img/birthday_wedding.svg";

export default function Ocassion() {
  return (
    <div>
      <div className={styles.ocassion_mobile}>
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
      {/* Separate */}
      <div className={styles.ocassion_desktop}>
        <div className={styles.ocassion_desktop_top}>
          {/* <div></div> */}
          <OcassionBoxes title="Wedding" />
          {/* <div></div> */}
          <OcassionBoxes title="Community" />
          {/* <div></div> */}
          <OcassionBoxes title="Health" />
          {/* <div></div> */}
          <OcassionBoxes title="Other common expenses" />
        </div>
        <div className={styles.ocassion_desktop_center}>
          <img src={BirthdayWedding} alt="BirthdayWedding" />
        </div>
        <div className={styles.ocassion_desktop_bottom}>
          <OcassionBoxes title="Birthday" />
          {/* <div></div> */}
          <OcassionBoxes title="Baby shower" />
          {/* <div></div> */}
          <OcassionBoxes title="Animals" />
          {/* <div></div> */}
          <OcassionBoxes title="Weekend getaway" />
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
}
