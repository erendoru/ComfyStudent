import React, { useState } from "react";
import "./style.scss";

import Modal from "./../modal";

export default function Index() {
  var [isShowing, setIsShowing] = useState(false);
  var [menu, setmenu] = useState(true);

  function openModalHandler() {
    setIsShowing(true);
  }
  function closeModalHandler() {
    setIsShowing(false);
  }

  return (
    <div className="Navbar-Component">
      <nav className="navbar">
        <div className="brand-title">ComfyStudent</div>
        <a
          href="# "
          className="toggle-button"
          onClick={() => {
            setmenu(!menu);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div
          className="navbar-links"
          style={{ display: menu ? "flex" : "none" }}
        >
          <ul>
            <li>
              <a href="# ">Keşfet</a>
            </li>
            <li>
              <a href="# ">Giriş</a>
            </li>
            <li>
              <a href="# " className="button" onClick={openModalHandler}>
                Kaydol
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Modal
        className="modal"
        show={isShowing}
        close={closeModalHandler}
      ></Modal> */}
    </div>
  );
}
