import React from "react";
import styles from "./HomePage.module.scss";
function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homeSections} id={styles.homeSection1}>
        <h1 style={{ marginBottom: "10px" }}>
          Welcome to World of Joy Child Care Centre!{" "}
        </h1>
        <h6>
          Where every child's journey is embraced with warmth and learning.
          Founded with a passion for nurturing young minds, our center is
          committed to providing a secure and stimulating environment for your
          little ones to thrive.
        </h6>
        <img
          id={styles.homePic1}
          src="https://todaysparent.mblycdn.com/tp/resized/2017/02/767x431/GettyImages-636672368.jpg"
        />
      </div>
      <div className={styles.homeSections} id={styles.homeSection2}></div>
      <div className={styles.homeSections} id={styles.homeSection3}></div>
      <div className={styles.homeSections} id={styles.homeSection4}></div>
    </div>
  );
}

export default HomePage;
