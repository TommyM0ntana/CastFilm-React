import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/TabsNav.css";
import Door from "../tabs_nav/Door"
import Devices from "../tabs_nav/Devices"
import Prices from "../tabs_nav/Prices"

class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs clasName="tabs">
          <TabList className="tab-nav-container">
            <Tab><Door/></Tab>
            <Tab><Devices/></Tab>
            <Tab><Prices/></Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
