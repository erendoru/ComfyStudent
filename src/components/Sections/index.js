import React from "react";

import { FcCheckmark } from "react-icons/fc";

import "./style.scss";

export default function Section() {
  // const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("");

  // function selectCountry(val) {
  //   setCountry({ country: val });
  // }
  // function selectRegion(val) {
  //   setRegion({ region: val });
  // }
  return (
    <div className="section">
      <div className="title">
        <h1>Yurtdışında eğitim alan insanlarla iletişime geç</h1>
        <h3>
          Sorularını sor <FcCheckmark />
        </h3>
        <h3>
          Üniversiteni Seç <FcCheckmark />
        </h3>
      </div>
      {/* <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      /> */}
      <div className="input-field">
        <input
          type="inputfield"
          name="Country"
          className="inputfield"
          placeholder="Okumak istediğin ülkeyi seç"
        />
      </div>
    </div>
  );
}
