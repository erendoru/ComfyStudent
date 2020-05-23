import React from "react";

import "./style.scss";

const modal = (props) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <div className="kayıtol-logo">
            <h3>
              Yeni <br /> Hesap
            </h3>
          </div>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="form">
            <input type="text" name="name" placeholder="Kullanıcı Adı" />
            <input type="mail" name="name" placeholder="Email" />
            <input type="mail" name="name" placeholder="Şifre" />
          </div>
          <p className="contrat">
            Kaydolarak <a href="# ">kullanıcı & gizlilik</a> sözleşmesi'ni kabul
            etmiş sayılırsınız.{" "}
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel">Giriş Yap</button>
          <button className="btn-continue">Kayıt Ol</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
