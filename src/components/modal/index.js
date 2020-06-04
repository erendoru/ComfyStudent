import React from "react";

import "./style.scss";

const modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>X</button>
        <div className="text">
          <h2>
            Neye <bold>İhtiyacın var?</bold>
          </h2>
          <p>
            Danışman olarak insanlara yardımcı mı olmak istiyorsun yoksa
            yurtdışında eğitim mi görmek istiyorsun?
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src="https://picsum.photos/140/140" alt="" />
            <h4>Danışman olarak hizmet vermek istiyorum</h4>
          </div>
          <div className="card">
            <img src="https://picsum.photos/140/140" alt="" />
            <h4>Yurtdışında okumak istiyorum</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default modal;
