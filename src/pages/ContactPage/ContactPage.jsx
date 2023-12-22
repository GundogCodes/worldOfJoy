import React, { useState } from "react";
import styles from "./ContactPage.module.scss";
import { Button, Text } from "@chakra-ui/react";
function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);
  return (
    <div className={styles.ContactPage}>
      <h1>Contact Us</h1>
      <div className={styles.mainSection}>
        <form
          action="https://formsubmit.co/worldofjoyccc@gmail.com"
          method="POST"
        >
          <h3>Message us now!</h3>
          <div className={styles.inputSection}>
            <label>Your Name</label>
            <input type="text" name="name" required></input>
            <label>Your Email</label>
            <input type="text" name="email" required></input>
            <label>Message</label>
            <input
              id={styles.messageSection}
              type="text"
              name="message"
              required
            ></input>
            <button
              onClick={() => {
                setMessageSent(true);
              }}
              style={{
                marginTop: "10px",
                padding: "5px",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              }}
            >
              Submit
            </button>
            {messageSent ? <h3>Sent!</h3> : <h3></h3>}
          </div>
        </form>
        <Text
          width={{ base: "90vw", md: "5vw" }}
          fontSize={"30px"}
          fontWeight={"bolder"}
        >
          Or
        </Text>
        <aside>
          <h3>Address: </h3>
          <h4>7225 Argyll Rd NW, Edmonton, AB T6C 4J2</h4>
          <h3>Hours: </h3>
          <h4 id={styles.hoursList}>
            <p>
              <span>Sunday:</span> Closed
            </p>{" "}
            <br />
            <p>
              <span>Monday:</span> 6:30a.m. - 5:30p.m.
            </p>{" "}
            <br />
            <p>
              <span>Tuesday:</span> 6:30a.m. - 5:30p.m.
            </p>
            <br />
            <p>
              <span>Wednesday:</span> 6:30a.m. - 5:30p.m.{" "}
            </p>
            <br />
            <p>
              <span>Thursday:</span> 6:30a.m. - 5:30p.m.{" "}
            </p>
            <br />
            <p>
              <span>Friday:</span> 6:30a.m. - 5:30p.m.{" "}
            </p>
            <br />
            <p>
              <span>Saturday:</span> Closed
            </p>
          </h4>
          <h3>Phone: </h3>
          <h4>
            <a href="tel:+7806161515">(780) 616-1515</a>
          </h4>
          <h3>Email: </h3>
          <a href="mailto:worldofjoyccc@gmail.com">worldofjoyccc@gmail.com</a>
        </aside>
      </div>
    </div>
  );
}

export default ContactPage;
