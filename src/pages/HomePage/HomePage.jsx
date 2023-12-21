import React from "react";
import styles from "./HomePage.module.scss";
import { Carousel, Image } from "react-bootstrap";
import { useState } from "react";
function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log("INDEX", index);

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
      <div className={styles.homeSections} id={styles.homeSection2}>
        <Carousel
          activeIndex={styles.index}
          onSelect={handleSelect}
          className={styles.Carousel}
        >
          <Carousel.Item
            className={styles.CarouselItem}
            styles={{ backgroundPosition: "cover" }}
          >
            <Carousel.Caption
              style={{ color: "black" }}
              className={styles.caption}
            >
              <h3 className={styles.cardTitle}></h3>
              <p className={styles.itemDesc}></p>
              <a className={styles.sm}> Buy Now! </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.CarouselItem}>
            <Carousel.Caption className={styles.caption}>
              <h3 className={styles.cardTitle}></h3>

              <a className={styles.sm}> Buy Now! </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.CarouselItem}>
            <Carousel.Caption className={styles.caption}>
              <h3 className={styles.cardTitle}></h3>
              <p className={styles.itemDesc}></p>
              <a className={styles.sm}> Buy Now! </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.CarouselItem}>
            <Carousel.Caption
              style={{
                color: "white",
                background: "rgba(0,0,0,0.5)",
                borderRadius: "15px",
              }}
              className={styles.caption}
            >
              <h3 className={styles.cardTitle}> </h3>
              <p className={styles.itemDesc}></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.homeSections} id={styles.homeSection3}></div>
    </div>
  );
}

export default HomePage;
