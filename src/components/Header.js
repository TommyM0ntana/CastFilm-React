import React, { Component } from "react";
import logo from "../svg/logo13.svg";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ic_play_circle_outline } from "react-icons-kit/md/ic_play_circle_outline";
import { Icon } from "react-icons-kit";



class Header extends Component {
  render() {
    return (
      <HeaderComponent className='header-container'>
        <div className='header-top'>
          <Logo src={logo} alt='' />
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
          <Link className='btn-main'>
            <span className='r'> Try it now</span>
            <Icon
              className='icon'
              size={65}
              style={{
                width: 40,
                height: 40,
                marginLeft: 35
              }}
              icon={ic_play_circle_outline}
            />
          </Link>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

// Header TOP

const HeaderComponent = styled.div`
  .signIn-btn {
    color: #ffffff;
    text-decoration: none;
    right: 0;
    margin: 2.125rem 5% ;
    padding: 0.4375rem 1.0625rem;
    font-wight: 700;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background-color: transparent;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.9);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
      background: #d30913;
      opacity:0.9;
  
    }   
    
`;

//LOGO
const Logo = styled.img`
  width: 15rem;
  height: 3.2rem;
  position: absolute;
  /*< top: 7%;
  left: 12%; />*/
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  -webkit-filter: drop-shadow(2px 2px black);
`;
