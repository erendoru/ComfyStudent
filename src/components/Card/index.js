import React from "react";

import "./style.scss";
import { FcCloseUpMode } from "react-icons/fc";

export default function index(prop) {
  return (
    <div className="card">
      <div className="image">
        <img src={prop.photo} alt="Card Photo" />
      </div>
      <div className="description">
        <p>{prop.text}</p>
      </div>
    </div>
  );
}
