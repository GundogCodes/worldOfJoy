import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaGlobe } from "react-icons/fa";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import HomePage from "./pages/HomePage/HomePage";
import ValuesPage from "./pages/ValuesPage/ValuesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import FindUsPage from "./pages/FindUsPage/FindUsPage";
function App() {
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
          <Tab color={"white"}>Home</Tab>
          <Tab color={"white"}>Our Values</Tab>
          <Tab color={"white"}>Contact</Tab>
          <Tab color={"white"} position={"absolute"} right={"10px"}>
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
            height={"300vh"}
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

          <footer
            style={{
              width: "100vw",
              height: "30vh",
              backgroundColor: "orange",
            }}
          >
            <section>
              Contact
              <p>Phone</p>
              <p>Email</p>
              <p>Address</p>
            </section>
            <section>
              Info
              <p>Phone</p>
              <p>Email</p>
              <p>Address</p>
            </section>
            <section>
              Website By
              <p>Phone</p>
              <p>Email</p>
              <p>Address</p>
            </section>
          </footer>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
