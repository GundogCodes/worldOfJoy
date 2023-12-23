import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import "./App.css";
import ContactPage from "./pages/ContactPage/ContactPage";
import FindUsPage from "./pages/FindUsPage/FindUsPage";
import HomePage from "./pages/HomePage/HomePage";
import ValuesPage from "./pages/ValuesPage/ValuesPage";
import { useState } from "react";
function App() {
  const [footerHeight, setFooterHeight] = useState(null);
  const screenWidth = window.innerWidth;
  function handlePageClick(e) {
    console.log("E: ", e);
  }
  return (
    <div children="App">
      <nav
        className="headerNav"
        style={{
          height: "40vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "0px",
          left: "0px",
          position: "absolute",
        }}
      >
        <div className="sidePics"></div>
        <div className="center">
          <h1
            style={{
              fontWeight: "bolder",
              color: "rgb(36,64,151)",
            }}
          >
            World Of Joy
          </h1>
          <h2 style={{ fontWeight: "bolder", color: "rgb(188,61,47)" }}>
            Child Care Centre
          </h2>
        </div>
        <div className="sidePics"></div>
      </nav>
      <Tabs
        position="absolute"
        height={"5.5vh"}
        top={"40vh"}
        left={"0"}
        variant="unstyled"
        backgroundColor={"rgb(229, 75, 75)"}
      >
        <TabList width={"100vw"}>
          <Tab onClick={handlePageClick} color={"white"}>
            Home
          </Tab>
          <Tab onClick={handlePageClick} color={"white"}>
            Our Values
          </Tab>
          <Tab onClick={handlePageClick} color={"white"}>
            Contact
          </Tab>
          <Tab
            onClick={handlePageClick}
            color={"white"}
            position={"absolute"}
            right={"10px"}
          >
            Find Us
          </Tab>
          {/* <p
            style={{
              backgroundColor: "orange",
              width: "47%",
              height: "3vh",
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center",
            }}
          >
            W
          </p> */}
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="blue.500" />
        <TabPanels>
          <TabPanel
            width={"100%"}
            height={"270vh"}
            backgroundColor={"rgb(173, 216, 230)"}
          >
            <HomePage />
          </TabPanel>
          <TabPanel width={"100%"} height={"240vh"}>
            <ValuesPage />
          </TabPanel>
          <TabPanel
            width={"100%"}
            height={"120vh"}
            backgroundColor={"rgb(144, 212, 169)"}
          >
            <ContactPage />
          </TabPanel>
          <TabPanel
            width={"100%"}
            height={"100vh"}
            backgroundColor={"rgb(255, 255, 204)"}
          >
            <FindUsPage />
          </TabPanel>

          {/* <footer
            style={{
              width: "100vw",
              height: "30vh",
              backgroundColor: "rgb(242,242,242)",
            }}
          >
            <section>
              <h1 style={{ fontSize: "20px", width: "95%" }}>Get in Touch</h1>
              <div className="pDiv">
                <p>
                  Phone
                  <br />
                  <a href="tel:+7806161515">(780) 616-1515</a>
                </p>

                <p>
                  Email
                  <br />
                  <a href="mailto:worldofjoyccc@gmail.com">
                    worldofjoyccc@gmail.com
                  </a>
                </p>
              </div>
            </section>
            <section>
              <h1 style={{ fontSize: "20px", width: "95%" }}>Helpful Links</h1>
              <div className="pDiv">
                <p>
                  Location
                  <br />
                  7225 Argyll Rd NW, Edmonton, AB T6C 4J2
                </p>
                <a href="https://applychildcaresubsidy.alberta.ca/">
                  {"->"} Subsidy Eligibility {"<-"}
                </a>
              </div>
            </section>
            <section>
              <h1 style={{ fontSize: "20px", width: "95%" }}>Hours</h1>
              <div className="pDiv">
                <p>Mondays to Friday --- 6:30 to 5:30pm</p>
                <p>Saturday & Sunday --- Closed</p>
                <p>Website by Innovation Software</p>
              </div>
            </section>
          </footer> */}
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
