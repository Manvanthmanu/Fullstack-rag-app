import NavbarComponent from "../components/webapp-ui/navbar";

import type { CSSProperties } from "react";
import TabsBasic from "../components/webapp-ui/top-navigation";
import PrivateRoute from '../lib/utils'
import ProfileMenu from "../components/userProfile";
import {Settings} from "lucide-react";



export default function WebApp() {
  const rightSidebarStyle: CSSProperties = {
    minWidth: '22%',
    backgroundColor: '#212121',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '40px',
    alignItems: 'center',
  }

  const userData: CSSProperties = {
    width: "100%",
    backgroundColor: "black",
    height: "60px",
    borderRadius: "0 20px 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "absolute", // pinned
    bottom: 0,
    left: 0,

  }
  const openTab: CSSProperties = {
    width: "100%",
    borderRadius: "0 20px 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    position: "absolute", // pinned

  }

  return (
    <>
      <PrivateRoute>


        <NavbarComponent />
        
          <section style={{ display: 'flex', backgroundColor: '#161515', flexDirection: 'row' }}>
            {/* Sidebar */}
            <div
              id="left-sidebar"
              className="min-h-screen"
              style={rightSidebarStyle}
            >
              <div style={openTab}>
                <TabsBasic />
              </div>
              <div style={userData} >
                <ProfileMenu />
                <Settings color="white" style={{ width: 18}} />
              </div>
            </div>

            {/* Main content */}
            <div style={{ width: '75%' }}></div>
          </section>
        
      </PrivateRoute>
      

    </>

  );
}
