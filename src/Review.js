import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setPeople] = useState(0);
  const { id, image, job, name, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prev = () => {
    setPeople(checkIndex(index - 1));
  };
  const next = () => {
    setPeople(checkIndex(index - 1));
  };
  const randomIndex = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      setPeople(checkIndex(random + 1));
    } else {
      setPeople(random);
    }
  };
  return (
    <article key={id} className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prev} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomIndex} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
