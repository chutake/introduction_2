import React from "react";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <a className="btn" href="/">
            Top
          </a>
        </li>
        <li>
          <a className="btn" href="/Work">
            Work
          </a>
        </li>
        <li>
          <a className="btn" href="/Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
