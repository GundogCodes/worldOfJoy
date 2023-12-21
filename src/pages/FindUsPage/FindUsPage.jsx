import React, { useEffect, useState } from "react";
import styles from "./FindUsPage.module.scss";

function FindUsPage() {
  /************************************ STATES ************************************/
  const [mapWidth, setMapWidth] = useState("600");
  const [mapHeight, setMapHeight] = useState("450");
  /************************************ VARIABLES ************************************/
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 900) {
      setMapWidth("350");
      setMapHeight("300");
    } else {
      setMapWidth("600");
      setMapHeight("450");
    }
  }, []);
  return (
    <div className={styles.FindUsPage}>
      <h1>Find Us</h1>
      <main>
        <iframe
          id={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.765707696749!2d-113.4443357232584!3d53.508380572336755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0198e05a18601%3A0xf95cba20147b0896!2sWorld%20Of%20Joy%20Child%20Care%20Centre!5e0!3m2!1sen!2sca!4v1703023529016!5m2!1sen!2sca"
          width={mapWidth}
          height={mapHeight}
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.infoDiv}>
          <label>
            Welcome to our daycare nestled at 7225 Argyll Rd NW, Edmonton, AB
            T6C 4J2.
            <br />
            Conveniently park right in front, and if you have any questions or
            need assistance, feel free to give us a call at (780) 616-1515.
            We're here to make your child's experience with us as smooth and
            delightful as possible.{" "}
            <h3 style={{ fontWeight: "bolder" }}>
              We look forward to seeing you!
            </h3>
          </label>
        </div>
      </main>
    </div>
  );
}

export default FindUsPage;
