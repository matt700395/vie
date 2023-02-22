import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useRef } from "react";

const VideoWithTeamStream = () => {
  const [isOpen, setOpen] = React.useState(false);
  const imgRef = useRef(null);
  const socketRef = useRef(null);


  React.useEffect(() => {
    console.clear();
  }, []);


  React.useEffect(() => {
      // Create a new WebSocket connection
      socketRef.current = new WebSocket('ws://localhost:8000/video-feed');

      // Handle messages received from the server
      socketRef.current.onmessage = (event) => {
          // Convert the binary data to a Blob object and create a URL for the image data
          const blob = new Blob([event.data], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(blob);

          // Update the "src" attribute of the img element to display the new image
          imgRef.current.src = imageUrl;
      };

      // Clean up the WebSocket connection when the component is unmounted
      return () => {
          if (socketRef.current) {
              socketRef.current.close();
          }
      };
  }, []);



  return (
    <section
      className="team-vid section-padding bg-dark pt-0"
      data-overlay-dark="0"
    >
      <div className="container">
        <div className="row mb-20">
          <div className="col-12">
            <div
              className="vid-img bg-img"
              data-overlay-dark="2"
            >
              <img ref={imgRef} alt="video feed" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-100">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Meet Our Team
                <span className="right"></span>
              </h6>
              <h2>We’ve Experience Team Member to Provide Solutions</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/1.png" alt="" />
              </div>
              <div className="info">
                <h5>Eddie E. Moseley</h5>
                <p>CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/2.png" alt="" />
              </div>
              <div className="info">
                <h5>John J. Schreffler</h5>
                <p>Apps Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center sm-mb50">
              <div className="img">
                <img src="/img/mobile-app/team/3.png" alt="" />
              </div>
              <div className="info">
                <h5>Venessa M. Meister</h5>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item text-center">
              <div className="img">
                <img src="/img/mobile-app/team/4.png" alt="" />
              </div>
              <div className="info">
                <h5>Joel R. Funkhouser</h5>
                <p>Senior Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default VideoWithTeamStream;
