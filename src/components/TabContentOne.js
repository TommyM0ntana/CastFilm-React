import React, { Component } from "react";
import Img from "../images/tab-1-pic.png";
import "../css/TabsNav.css";
import { Button } from "./Button";

class TabContentOne extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='tab-container'>
            <div
              className='text'
              style={{ marginBottom: "-10px", marginLeft: "40px" }}
            >
              You can unsubscribe whenever you want if you are not satisfy for
              some of the services.
              <br />
              <Button style={{ opacity: "0.5" }}>
                <span>Try it now</span>
              </Button>
            </div>
            <img className='img' src={Img} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default TabContentOne;
