import React from "react";
import { Button } from "./Button";
import "../css/TabsNav.css";
import TV from "../images/tab-tv.png";
import PHONE from "../images/tab-tablet.png";
import MACBOOK from "../images/tab-macbook.png";

function TabContentTwo() {
  return (
    <div>
      <div className='maintab'>
        <div className='maintop'>
          <h4 className='mainp'>
            Watch all your favorite movies and TV shows anytime and anywhere.{" "}
          </h4>
          <Button style={{ margin: "auto", opacity: "0.7" }} className='btntop'>
            Try in Now
          </Button>
        </div>
        <div className='mainbottom'>
          <div>
            <img style={{ width: "14rem" }} className='tv' src={TV} alt='' />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, blue-ray and
              more.{" "}
            </p>
          </div>
          <div>
            <img
              style={{ width: "14rem", marginTop: "10px" }}
              className='tv'
              src={PHONE}
              alt=''
            />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet,whenever you go. </p>
          </div>
          <div>
            <img
              style={{ width: "14rem", marginTop: "15px" }}
              className='tv'
              src={MACBOOK}
              alt=''
            />
            <h3>Use any computer</h3>
            <p>Can create many home accounts for more users. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabContentTwo;
