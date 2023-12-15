import React from "react";
import styles from "./HomePage.module.scss";
function HomePage() {
  return (
    <div className={styles.HomePage}>
      <h1 style={{ marginBottom: "10px" }}>
        Welcome to World of Joy Child Care Centre!{" "}
      </h1>
      <h6>
        Where every child's journey is embraced with warmth and learning.
        Founded with a passion for nurturing young minds, our center is
        committed to providing a secure and stimulating environment for your
        little ones to thrive.
      </h6>
    </div>
  );
}

export default HomePage;
