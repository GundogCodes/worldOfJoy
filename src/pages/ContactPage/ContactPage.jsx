import React, { useState } from "react";
import styles from "./ContactPage.module.scss";
import { Button, Text } from "@chakra-ui/react";
function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);
  return (
    <div className={styles.ContactPage}>
      <h1>Contact Us</h1>
      <div className={styles.mainSection}>
        <form>
          <h3>Message us now!</h3>
          <div className={styles.inputSection}>
            <label>Name</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>Message</label>
            <input id={styles.messageSection}></input>
            <Button marginTop={"5px"}>Submit</Button>
            {messageSent ? <h3>Sent!</h3> : <h3></h3>}
          </div>
        </form>
        <Text fontSize={"30px"} fontWeight={"bolder"}>
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
          <h4>gunisharma@gmail.com</h4>
        </aside>
      </div>
    </div>
  );
}

export default ContactPage;
