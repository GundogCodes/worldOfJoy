import React from "react";
import styles from "./ValuesPage.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
function ValuesPage() {
  return (
    <div className={styles.ValuesPage}>
      <div className={styles.section} id={styles.section1}>
        <div id={styles.section1Div}>
          <h1>At World of Joy Child Care Centre</h1>
          <p>
            We believe in fostering a holistic approach to early childhood
            development. Our dedicated team of experienced educators and
            caregivers is devoted to creating an atmosphere that promotes not
            only academic growth but also emotional, social, and physical
            well-being. We understand the importance of these formative years
            and strive to make each day an enriching experience for your child.
          </p>
        </div>
        <div id={styles.imgSection}>
          <img
            id={styles.valuesImg1}
            src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-learn-clipart-illustration-of-a-boy-drawing-with-pencils-and-light-vector-png-image_6803623.png"
          />
        </div>
      </div>

      <div className={styles.section} id={styles.section2}>
        <h1>Our Values</h1>
        <div className={styles.accordionSection}>
          <Accordion
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
            }
            borderRadius={"6px"}
            width={"40%"}
            height={"80%"}
            allowToggle
            backgroundColor={"white"}
          >
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    borderBottomColor={"white"}
                  >
                    Safety First
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Your child's safety is our top priority. We maintain rigorous
                safety standards, from secure facilities to well-trained staft,
                to provide you with peace of mind while your child is under our
                care.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    borderBottomColor={"white"}
                  >
                    Individualized Learning
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                We recognize and celebrate the uniqueness of each child. Our
                tailored approach to learning ensures that every child's
                interests, strengths, and areas of development are taken into
                account, fostering a love for learning.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    borderBottomColor={"white"}
                  >
                    Joyful Environment
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                We believe that a happy child is a thriving child. Our center is
                designed to be a place of joy, with vibrant and engaging spaces
                that inspire curiosity, creativity, and a sense of wonder.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    borderBottomColor={"white"}
                  >
                    Open Communication
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Building a strong partnership with parents is essential. We
                prioritize transparent and open communication, keeping you
                informed about your child's progress, daily activities, and any
                important updates, fostering a sense of community and trust.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <img className={styles.valuesImg} src="/photos/classPic.jpg" />
        </div>
      </div>
      <div className={styles.section} id={styles.section3}>
        <div id={styles.imgSection2}>
          <img
            id={styles.valuesImg2}
            src="https://img.freepik.com/free-vector/simple-coloured-sketch-girl-thinking_1308-84028.jpg?w=360&t=st=1702628334~exp=1702628934~hmac=3938a018238e63db7a47944a2606f6b403a75852578cf38f41acef52caa05391"
          />
        </div>
        <div id={styles.section2Div}>
          <h1>Another section</h1>
          <p>
            We believe in fostering a holistic approach to early childhood
            development. Our dedicated team of experienced educators and
            caregivers is devoted to creating an atmosphere that promotes not
            only academic growth but also emotional, social, and physical
            well-being. We understand the importance of these formative years
            and strive to make each day an enriching experience for your child.
          </p>
        </div>
      </div>
      <div id={styles.section4}>
        <h1>Contact us now!</h1>
      </div>
    </div>
  );
}

export default ValuesPage;
