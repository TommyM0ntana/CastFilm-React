import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/TabsNav.css";
import Door from "../tabs_nav/Door";
import Devices from "../tabs_nav/Devices";
import Prices from "../tabs_nav/Prices";
import TabContentOne from "../components/TabContentOne";
import TabContentTwo from "../components/TabContentTwo";
import TabContentTre from "../components/TabContentTre";

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          selectedIndex={this.state.tabIndex}
          clasName='tabs'
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className='tab-nav-container'>
            <Tab className={`${this.state.tabIndex === 0 ? "active" : null}`}>
              <Door />
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? "active" : null}`}>
              <Devices />
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? "active" : null}`}>
              <Prices />
            </Tab>
          </TabList>
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentTre />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
