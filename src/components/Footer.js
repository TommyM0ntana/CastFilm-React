import React from "react";
import { Link } from "react-router-dom";
import "../css/TabsNav.css";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

function Footer() {
  return (
    <div className='footer-container'>
      <span className='footer-questions'>
        Questions?
        <Link> Call 3-866-654-1134</Link>
      </span>
      <div className='footer-columns'>
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>CastFilm Originals</Link>
          </li>
          <li>
            <Link>Ways to watch</Link>
          </li>
          <li>
            <Link>Corporate informations</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Terms of Use</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Legal notices</Link>
          </li>
          <li>
            <Link>Cookie preferences</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Cookie preferences</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Gift Cards</Link>
          </li>
          <li>
            <Link>Speed Test</Link>
          </li>
          <li>
            <Link>Media Center</Link>
          </li>
          <li>
            <Link>Investors Relations </Link>
          </li>
        </ul>
        <div className='lang-btn'>
          <Icon icon={iosWorld} size={30} /> English
          <Icon icon={arrowSortedDown} size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
