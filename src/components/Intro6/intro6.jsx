import React from "react";
import { Link } from "react-scroll";

const Intro6 = () => {
  return (
    <header className="mobile-app valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption">
              {/* <h1 className="mb-20" style={{textAlign:'left'}}>
              AR Life
              </h1>
              <h1 className="mb-20" style={{textAlign:'center'}}>
              in
              </h1>
              <h1 className="mb-20" style={{textAlign:'right'}}>
              Everyday life.
              </h1> */}
              <h1 className="mb-20">
              MOBIS Meta World
              </h1>
              <h5 className="mb-20">
              AR Life in Everyday life
              </h5>
              <p>
              </p>

            </div>
          </div>
          {/* 그림 삽입 */}
          {/* <div className="col-lg-5 offset-lg-1"> */}
          <div className="col-lg-5">
            <div className="img">
              {/* <img src="/img/mobile-app/header-img.png" alt="" /> */}
              {/* <img src="/img/mobile-app/main_car.png" alt="" /> */}
              {/* <img src="/img/mobile-app/Group.png" alt="" /> */}
              <img src="/img/mobile-app/electric-car-elements-screen.gif" alt="" />
              {/* <video autoPlay={true} muteed controls >
                <source src="/img/mobile-app/electric-car-elements-screen.mp4" type="video/mp4" />
              </video> */}
              {/* <video></video> */}
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="caption">
                <div className="butons mt-40">
                    <a href="mobile-app/mobile-app-dark-withar" className="butn-gr rounded buton">
                      <span>With AR</span>
                    </a>
                    <a>
                    <Link href='/mobile-app/intro6_withar'  className="butn-bord-dark rounded buton"> 
                    <span>Nice Shot 바로가기</span>
                      {/* <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                      </i> */}
                    </Link>
                    </a>
                    <a href="#0" className="butn-bord-dark rounded buton">
                      <span>Nice Shot</span>
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                      </i>
                    </a>
                </div> 
             </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Intro6;
