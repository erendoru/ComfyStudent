import React, { useState } from "react";

import "./style.scss";
import Card from "./../Card/index";
import Typical from "react-typical";
import Faq from "./../faq/index";

import Student2 from "./../../graphics/studentandteacher.png";
import Students4 from "./../../graphics/students-chillin.png";

const cards = [
  {
    photo: Student2,
    text:
      "ComfyStudent, yetenekli danışmanların yurtdışında okumak isteyenlerle buluştuğu. Bir danışmanlık platformudur.",
  },
  {
    photo: Student2,
    text:
      "Rekabetçi pazar anlayışı ile öğrencilerin başarılı danışmanlardan uygun fiyata hizmet almasını sağlar.",
  },
  {
    photo: Student2,
    text:
      "Hizmet değerlendirilmesi sayesinde öğrencilerin her zaman en kaliteli hizmete ulaşmasını sağlar.",
  },
];

function Index() {
  const [faqs, setFaqs] = useState([
    {
      question: "how many bla bla",
      answer: "yes bla bla",
      open: false,
    },
    {
      question: "how many more bla bla",
      answer: "yes bla bla",
      open: false,
    },
    {
      question: "how many yes and no bla bla",
      answer: "yes bla bla",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="explore-section">
      <div className="section-size">
        <div className="title">
          <h1>
            ComfyStudent{" "}
            <Typical
              steps={["nedir?", 5000, "ne iş yapar?", 3000]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
        </div>
        <div className="cards">
          {cards.map((e, i) => (
            <Card photo={e.photo} text={e.text} key={i} />
          ))}
        </div>
        <div className="button">
          <input type="button" value="Kayıt Ol" />
        </div>
      </div>
      <div className="Explonation">
        <img src={Students4} alt="Students" />
        <div className="faqs">
          {faqs.map((faq, i) => (
            <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
