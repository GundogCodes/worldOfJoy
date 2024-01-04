import React from "react";
import styles from "./HomePage.module.scss";
import Carousel from "react-bootstrap/Carousel";
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

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={styles.Carousel}
      >
        {" "}
        {index === 0 ? (
          <Carousel.Item
            className={styles.CarouselItem}
            styles={{ backgroundPosition: "cover" }}
          >
            <Carousel.Caption
              style={{ color: "black" }}
              className={styles.caption}
            >
              <div className={styles.carouselImageDiv}>
                <img
                  id={styles.carouselImages}
                  src="https://www.acd.org.au/wp-content/uploads/2021/02/acd-choosing-child-care-or-kinder-iStock-1125881964.jpg"
                />
                <aside>
                  <h1>Discovering the Joy of Learning</h1> Watch as our little
                  explorers delve into the world of knowledge with wide-eyed
                  wonder. From hands-on activities to collaborative play, every
                  moment is a chance to learn, grow, and create lasting
                  memories!
                </aside>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ) : (
          <></>
        )}
        {index === 1 ? (
          <Carousel.Item
            className={styles.CarouselItem}
            styles={{ backgroundPosition: "cover" }}
          >
            <Carousel.Caption
              style={{ color: "black" }}
              className={styles.caption}
            >
              <div className={styles.carouselImageDiv}>
                <aside>
                  <h1>Creativity Unleashed</h1> Capturing the essence of pure
                  joy, our daycare is a haven for creativity. Witness the
                  laughter and smiles as kids express themselves through art,
                  music, and imaginative play. Learning is an adventure, and our
                  little ones are the fearless pioneers!
                </aside>

                <img
                  id={styles.carouselImages}
                  src="https://cdn.firstcry.com/education/2022/12/08180232/Typical-Kindergarten-Schedule.jpg"
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ) : (
          <></>
        )}
        {index === 2 ? (
          <Carousel.Item
            className={styles.CarouselItem}
            styles={{ backgroundPosition: "cover" }}
          >
            <Carousel.Caption
              style={{ color: "black" }}
              className={styles.caption}
            >
              <div className={styles.carouselImageDiv}>
                <img
                  id={styles.carouselImages}
                  src="https://cf.ltkcdn.net/kids/images/orig/233318-1600x1030-what-do-kids-learn-kindergarten.jpg"
                />
                <aside>
                  <h1>Friendship in Bloom</h1> In our vibrant daycare community,
                  friendships blossom as children engage in shared experiences.
                  From interactive learning sessions to outdoor adventures, each
                  day is an opportunity to build bonds that last a lifetime.
                  Join us in creating a nurturing environment where every child
                  feels valued and cherished.
                </aside>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ) : (
          <></>
        )}
      </Carousel>

      <div className={styles.homeSections} id={styles.homeSection3}>
        <h2>A Nurturing Community</h2>
        <p>
          World of Joy Child Care Centre is more than just a daycare; it's a
          close-knit community where children thrive in a supportive and caring
          environment. Embrace the warmth of our community, where every child is
          celebrated, and families come together to create lasting bonds. Join
          us in building a joyful foundation for your child's journey.
        </p>
        <h1 style={{ borderBottom: "none", marginTop: "5vh" }}>
          Programs for 0-12 year old
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
