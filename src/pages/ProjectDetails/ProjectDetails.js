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
    </div>
  );
}
