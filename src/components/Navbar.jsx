import React, { useState } from "react";
import brandLogo from "../assets/logo.svg";
import Button from "./common/Button";
import Toggler from "./common/Toggler";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  function getListClasses() {
    let classes = "list nav__list ";
    return clicked ? classes : classes + "nav__list-hide";
  }

  return (
    <header className="section section-nav">
      <div className="container">
        <nav className="nav">
          <img src={brandLogo} alt="brand logo image" />

          <Toggler clicked={clicked} onClick={() => setClicked(!clicked)} />

          <ul className={getListClasses()}>
            <div className="nav__list-part nav__list-part1">
              <li className="list__item nav__item">
                <a href="#" className="link nav__link">
                  Features
                </a>
              </li>
              <li className="list__item nav__item">
                <a href="#" className="link nav__link">
                  Pricing
                </a>
              </li>
              <li className="list__item nav__item">
                <a href="#" className="link nav__link">
                  Resources
                </a>
              </li>
            </div>

            <hr className="nav__list-separator" />

            <div className="nav__list-part nav__list-part2">
              <li className="list__item nav__item">
                <a href="#" className="link nav__link">
                  Login
                </a>
              </li>
              <li className="list__item nav__item">
                <a href="#" className="link nav__link">
                  <Button />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
