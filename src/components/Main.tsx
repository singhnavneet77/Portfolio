import React from "react";
import { Typewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import Myimage from "../assets/images/Myimage1.png";

function Main() {
  const titles = [ "Software Engineer","Full Stack Developer", "Competitive Programmer", "Tech Enthusiast"];

  return (
    <div className="container">
      <div className="main-section">
        <div className="image-wrapper">
          <img src={Myimage} alt="My Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/singhnavneet77" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/navneet-kumar-singh07/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h2>Hey, My name is</h2>
          <h1>Navneet Kumar Singh</h1>
          <p>
            <span>
            I'm a{" "}
              <Typewriter
                words={ titles}
                loop={0} // 0 means infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/singhnavneet77" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/navneet-kumar-singh07/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

