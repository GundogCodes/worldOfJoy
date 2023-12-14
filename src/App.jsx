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
          height: "30vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "0px",
          left: "0px",
          position: "absolute",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
            color: "rgb(36,64,151)",
            width: "100vw",
          }}
        >
          <span>World</span> Of <span>Joy</span>
        </h1>
        <h2 style={{ fontWeight: "bolder", color: "rgb(188,61,47)" }}>
          Child Care Centre
        </h2>
      </nav>
      <Tabs
        position="absolute"
        height={"3vh"}
        top={"30vh"}
        left={"0"}
        variant="unstyled"
      >
        <TabList width={"100vw"}>
          <Tab>Home</Tab>
          <Tab>Our Values</Tab>
          <Tab>Contact</Tab>
          <Tab position={"absolute"} right={"10px"}>
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
          <TabPanel width={"100%"} height={"200vh"}>
            <HomePage />
          </TabPanel>
          <TabPanel width={"100%"} height={"100vh"}>
            <ValuesPage />
          </TabPanel>
          <TabPanel width={"100%"} height={"120vh"}>
            <ContactPage />
          </TabPanel>
          <TabPanel width={"100%"} height={"100vh"}>
            <FindUsPage />
          </TabPanel>

          <footer
            style={{
              width: "100vw",
              height: "30vh",
              backgroundColor: "rgb(242,242,242)",
            }}
          >
            <section>Contact</section>
            <section>About</section>
            <section>Info</section>
            <section>Website By</section>
          </footer>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
