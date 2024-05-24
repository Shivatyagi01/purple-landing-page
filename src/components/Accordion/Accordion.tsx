import { useState } from "react";
interface Item {
  title: string;
  content: string;
}
interface AccordionProps {
  items: Item[];
}
const Accordion = ({ items }:AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item:any, index:any) => (
        <div key={index} className="faq-cont">
          <div
            onClick={() => onItemClick(index)}
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <h4>{item.title}</h4>
            <div className="arrow">{activeIndex === index ? "▲" : "▼"}</div>
          </div>
          {activeIndex === index && (
            <div className="accordion-para">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
