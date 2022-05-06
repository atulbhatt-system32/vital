import React from "react";
import styles from "./SearchCategory.module.scss";

export default function SearchCategory() {
  return (
    <div className={styles.SearchCategory}>
      <div className={styles.SearchCategory_wrap}>
        {/* LOGO */}
        <div className={styles.SearchCategory_logo}>
          <div className={styles.SearchCategory_logo_img}></div>
          <div className={styles.SearchCategory_logo_text}></div>
        </div>
        {/* HEAD*/}
        <h1 className={styles.SearchCategory_head}>search by categories</h1>
        {/* INPUT BOX */}
        <div className={styles.SearchCategory_inputBox}>
          <div className={styles.SearchCategory_inputBox_wrap}>
            {/* NAME */}
            <div className={styles.SearchCategory_inputBox_name}>
              <div className={styles.SearchCategory_inputBox_name_text}>
                name
              </div>
              <input
                placeholder="Enter your name"
                className={styles.SearchCategory_inputBox_name_input}
              ></input>
            </div>
            {/* TYPE */}
            <div className={styles.SearchCategory_inputBox_type}>
              <div className={styles.SearchCategory_inputBox_type_text}>
                name
              </div>
              <input
                placeholder="Select type"
                className={styles.SearchCategory_inputBox_type_input}
              ></input>
            </div>
            {/* CATEGORY */}
            <div className={styles.SearchCategory_inputBox_category}>
              <div className={styles.SearchCategory_inputBox_category_text}>
                name
              </div>
              <input
                placeholder="Select type"
                className={styles.SearchCategory_inputBox_category_input}
              ></input>
            </div>
            {/* BUTTON */}
            <div className="SearchCategory_btn_wrap">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
