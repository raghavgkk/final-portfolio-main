import React from "react";
import "./MainText.css";
import DownloadIcon from "../assets/icons/Download.svg";

const MiddlePart = () => {
  const cvPath = "../assets/RaghavResume.pdf";

  return (
    <div className="middle-part">
      <div className="text">
        <div className="fname">Raghav</div>
        <div className="lname">Sharma</div>
        <div className="about">
          Khamma Ghani! I'm an
          <span className="bold"> Interaction Designer </span>
          with a passion for creating designs that not only look great, but also
          <span className="bold"> serve a purpose.</span> With a focus on
          <span className="bold"> user experience</span> and a knack for
          <span className="bold"> problem-solving</span>, I create designs that
          connect with audiences and achieve real-world results.
        </div>
      </div>
      <span className="download-icon">
        <div className="lower-part">
          <a href="https://drive.google.com/file/d/1tBBgXEo9IKlGDuyPeY0qOfoMTx9reLiI/view?usp=sharing" target="blank" >
            <img className="download" src={DownloadIcon} alt="Download Icon" />
            <div className="cv">Download CV</div>
          </a>
        </div>
      </span>
    </div>
  );
};

export default MiddlePart;
