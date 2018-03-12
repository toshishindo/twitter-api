import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="teal lighten-3">
      <div className="nav-wrapper">
        <ul className="right">
          <li>
            <Link to={"/following"} className="waves-effect waves-light btn">
              Following list
            </Link>
          </li>
          <li>
            <Link to={"/"} className="waves-effect waves-light btn">
              Timelineeee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
