import React from "react";

import twitterIcon from "../assets/Twitter.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import githubIcon from "../assets/GitHub.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img src={twitterIcon} />
        </a>
        <a href="#" className="social-icon">
          <img src={facebookIcon} />
        </a>
        <a href="#" className="social-icon">
          <img src={instagramIcon} />
        </a>
        <a href="#" className="social-icon">
          <img src={githubIcon} />
        </a>
      </div>
    </footer>
  );
}
