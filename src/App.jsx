import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
        <h1>World Of Joy</h1>
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
          <TabPanel backgroundColor={"orange"} width={"100%"} height={"200vh"}>
            <HomePage />
          </TabPanel>
          <TabPanel backgroundColor={"green"} width={"100%"} height={"100vh"}>
            <ValuesPage />
          </TabPanel>
          <TabPanel backgroundColor={"skyblue"} width={"100%"} height={"120vh"}>
            <ContactPage />
          </TabPanel>
          <TabPanel backgroundColor={"blue"} width={"100%"} height={"100vh"}>
            <FindUsPage />
          </TabPanel>

          <footer
            style={{ width: "100vw", height: "25vh", backgroundColor: "red" }}
          >
            Ima Footer
          </footer>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
