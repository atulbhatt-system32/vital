import React from "react";
import styles from "./ProjectDetails.module.scss";
import {
  worker,
  donation,
  john,
  location,
  heart,
  person,
  money,
  share,
} from "../../assets/img/index";
import { GradientBtn } from "../../components/index";
export default function ProjectDetails() {
  return (
    <div className={styles.projectDetails}>
      {/* PARTICIPATE */}
      <div className={styles.projectDetails_participate}>
        {/* IMAGE */}
        <div className={styles.projectDetails_participate_img_wrap}>
          <img src={worker} alt="worker" />
        </div>
        {/* CONTENT */}
        <div className={styles.projectDetails_participate_content}>
          <span className={styles.projectDetails_participate_content_head}>
            What is Lorem Ipsum?
          </span>
          <div className={styles.projectDetails_participate_content_details}>
            {/* CATEGORY */}
            <div
              className={
                styles.projectDetails_participate_content_details_category
              }
            >
              <span className={styles.details_category_left}>Category:</span>
              <span className={styles.details_category_right}>
                Personal projects
              </span>
            </div>
            {/* LIKES */}
            <div
              className={
                styles.projectDetails_participate_content_details_likes
              }
            >
              <span className={styles.details_likes_left}>Likes</span>
              <div className={styles.details_likes_right}>
                <img src={heart} alt="heart" />
                <span>30</span>
              </div>
            </div>
            {/* PARTICIPANTS */}
            <div
              className={
                styles.projectDetails_participate_content_details_participants
              }
            >
              <span className={styles.details_participants_left}>
                Participants
              </span>
              <div className={styles.details_participants_right}>
                <img src={person} alt="person" />
                <span>30</span>
              </div>
            </div>
            {/* AMOUNT */}
            <div
              className={
                styles.projectDetails_participate_content_details_amount
              }
            >
              <span className={styles.details_amount_left}>Amount raised</span>
              <div className={styles.details_amount_right}>
                <img src={money} alt="money" />
                <span>$70,000</span>
              </div>
            </div>
            {/* ************************************* */}
          </div>
          {/* BUTTONS */}
          <div className={styles.projectDetails_participate_btn}>
            <GradientBtn text="Participate" />
          </div>
        </div>
      </div>
      {/* COPY */}
      <div className={styles.projectDetails_copy}>
        <input className={styles.projectDetails_copy_input}></input>
        <div className={styles.projectDetails_copy_bottom}>
          <button className={styles.projectDetails_copy_btn}>Copy</button>
          <div className={styles.projectDetails_copy_share}>
            <span>Share</span>
            <img src={share} alt="share" />
          </div>
        </div>
      </div>
      {/* DETAILS */}
      <div className={styles.projectDetails_details}>
        <span className={styles.projectDetails_details_mainHead}>
          What is Lorem Ipsum?
        </span>
        <p className={styles.projectDetails_details_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen{" "}
        </p>
        <img src={worker} alt="worker" />
        <p className={styles.projectDetails_details_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
        <p className={styles.projectDetails_details_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more
        </p>
        <span className={styles.projectDetails_details_secondaryHead}>
          What is Lorem Ipsum?
        </span>
        <p className={styles.projectDetails_details_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <img src={donation} alt="donation" />
      </div>
    </div>
  );
}
