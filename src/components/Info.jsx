import React from "react";

import profilePic from "../assets/profile-pic.png";
import mailIcon from "../assets/Mail.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Info() {
  return (
    <>
      <img src={profilePic} className="img" />
      <div className="info__content">
        <h1 className="name">Laura Smith</h1>
        <h3 className="title">Frontend Developer</h3>
        <h5 className="website">laurasmith.website</h5>
        <div className="btns">
          <a href="#" className="btn">
            <img src={mailIcon} className="icon" />
            Email
          </a>
          <a href="#" className="btn btn--primary">
            <img src={linkedinIcon} className="icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
