import React from "react";
//image
import Instalogo from "./img/instagram.png";
import Gitlogo from "./img/github.png";
import Qiitalogo from "./img/qiita.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image">
        <ul>
          <li>
            <a
              className="btn instagram"
              href="https://www.instagram.com/chutake.exe/"
            >
              <img className="instagram-logo" src={Instalogo} alt="instagram" />
            </a>
          </li>
          <li>
            <a className="btn github" href="https://github.com/chutake">
              <img className="github-logo" src={Gitlogo} alt="github" />
            </a>
          </li>
          <li>
            <a className="btn qiita" href="https://qiita.com/chutake_exe">
              <img className="qiita-logo" src={Qiitalogo} alt="Qiita" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
