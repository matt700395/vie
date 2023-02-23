/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarMobileApp = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {/* {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )} */}

            <img ref={lr} src={'/img/mmw.png'} alt="logo" style={{ marginTop:10, maxWidth:30}}/>

          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/homepage/home1-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>사랑한다 현대모비스</a>
                </Link>
                <Link href="/homepage/home2-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>현</a>
                </Link>
                <Link href="/homepage/home5-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>대</a>
                </Link>
                <Link href="/homepage/home4-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>모</a>
                </Link>
                <Link href="/homepage/home3-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>비</a>
                </Link>
                <Link href="/homepage/home6-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>스</a>
                </Link>
                <Link href="/homepage/home7-dark">
                  <a className="dropdown-item" style={{textAlign:"center"}}>❣️</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/services-dark">
                <a className="nav-link">현대모비스</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/pricing-plan-dark">
                <a className="nav-link">멋쟁이 사자처럼</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/portfolio-dark">
              <a className="nav-link" >
                고려대학교 세종캠퍼스
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
              <a className="nav-link" >
                언더독 레볼루션
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
