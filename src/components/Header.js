import React, { Component } from "react";
import logo from "../svg/logo13.svg";
import { NavLink, Link } from "react-router-dom";
import { ic_play_circle_outline } from "react-icons-kit/md/ic_play_circle_outline";
import { Icon } from "react-icons-kit";
import { Button } from "../components/Button";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import media from "styled-media-query";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header-top'>
          <img src={logo} alt='' className='main-logo' />
          <NavLink className='signIn-btn' to='/'>
            <span className='s'> Sign in</span>
          </NavLink>
        </div>
        <div className='header-content'>
          <h1>Watch & Have Fun </h1>
          <h2>
            Interactive tv applications platform group from Infinity, Amazon
            Prime Video, Sky to Neflix.
          </h2>
          <div className='btn-main'>
            <span className='r'> Try it now</span>
            <Icon className='icon' size={55} icon={ic_play_circle_outline} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

// Header TOP
// const customMedia = generateMedia({
//   lgDesktop: "1350px",
//   mdDesktop: "1150px",
//   tablet: "960px",
//   mobile: "740px"
// });
// const HeaderComponent = styled.div`
//   .signIn-btn {
//     color: #ffffff;
//     text-decoration: none;
//     right: 0;
//     margin: 2.125rem 5% ;
//     padding: 0.4375rem 1.0625rem;
//     font-wight: 700;
//     line-height: normal;
//     border-radius: 0.1875rem;
//     font-size: 1rem;
//     background-color: transparent;
//     box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.9);
//     position: absolute;
//     translate: transform(-50%, -50%);
//     cursor: pointer;
//     transition: background 0.2s ease-in;
//     &:hover {
//       background: #d30913;
//       opacity:0.9

//     }
// `;

// LOGO
// const Logo = styled.img`
//   width: 15rem;
//   height: 3.2rem;
//   position: absolute;
//   /*< top: 7%;
//   left: 12%; />*/
//   top: 40%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   margin-left: 0;
//   -webkit-filter: drop-shadow(2px 2px black);

//   .btn-main {
//     ${customMedia.lessThan("mobile")`
//   left:20%;
//   `}
//   }
// `;
