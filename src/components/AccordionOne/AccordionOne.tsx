import { CallTracker } from "assert";
import { useState } from "react";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import "./styles.css";

const cards = [
  {
    header: "Lexus",
    image: image2,
    text: `Image description here`,
  },
  {
    header: "Audi",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "Mustang",
    image: image3,
    text: `Image description here`,
  },
  {
    header: "Nissan",
    image: image4,
    text: `Image description here`,
  },
];

export const AccordionOne = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img alt={card.text} src={card.image} />
            <div className="content">
              <span className="material-symbols-outlined"/>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};