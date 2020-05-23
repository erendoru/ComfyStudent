import React from "react";

import Navbar from "./../../components/Navbar/index";
import Section from "../../components/Sections/index";
import Background from "./../../graphics/section-background.jpg";
import ExploreSection from "./../../components/ExploreSection/index";

export default function index() {
  return (
    <div className="homepage">
      <div
        className="firstSection"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Navbar />
        <Section />
      </div>
      <ExploreSection />
    </div>
  );
}
