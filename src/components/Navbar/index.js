import React, { useState } from "react";
import Modal from "./../modal/index";

import "./style.scss";

export default function Index() {
  var [menu, setmenu] = useState(true);
  var [show, setShow] = useState(true);

  var showModal = () => {
    setShow(true);
  };

  var hideModal = () => {
    setShow(false);
  };

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
              <a href="# " className="button" onClick={showModal}>
                Kaydol
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Modal show={show} handleClose={hideModal}></Modal>
    </div>
  );
}
