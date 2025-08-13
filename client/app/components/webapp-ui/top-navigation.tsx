"use client";

import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import HomePage from "./homePage";
import ChatPage from "./chatPage";
import DataBasePage from "./databasePage";



export default function TabsBasic() {

  return (

    <Tabs
      aria-label="Sidebar tabs"
      defaultValue={0}
      
      sx={{
        width: "100%", // full width of the menu box
        height: "100%", // full height of the menu box
        backgroundColor: "transparent",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems:'center', 
        justifyContent:'center'
      }}
    >
      <TabList
      tabFlex="auto"
        sx={{
          width: "100%",
          backgroundColor: "#1e1e1e",
          borderBottom: "2px solid black",
          
          p: 1,
          flexShrink: 0, // stay at the top of the menu box
          "& .MuiTab-root": {
            color: "white",
            justifyContent: "center",
            borderRadius: "sm",
             // ⬅ add this for spacing between icon/text or tabs
            
            "&.Mui-selected": {
              backgroundColor: "#1e1e1e",
              color: "#2283BC",

            },

          },
        }}
      >
        <Tab >Home</Tab>
        <Tab >Database</Tab>
        <Tab >Logs</Tab>
      </TabList>

      <TabPanel value={0} sx={{
        color: "white",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // fill the sidebar height
        marginTop:'20px'
      }}>
        <HomePage />
      </TabPanel>

      <TabPanel value={1} sx={{ color: "white", p: 2 }}>
        <DataBasePage />
      </TabPanel>

      <TabPanel value={2} sx={{ color: "white", p: 2 }}>
        <ChatPage />
      </TabPanel>
    </Tabs>
  );
}
