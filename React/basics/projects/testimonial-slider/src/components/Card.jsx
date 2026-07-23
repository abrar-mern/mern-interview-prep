import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Card = ({ review }) => {
  if (!review) {
    return null;
  }
  return (
    <div>
      <div>
        <img src={review.image} alt="" />
        <div>{review.name}</div>
        <p>{review.job}</p>
        <FaQuoteLeft />

        <p>{review.text}</p>
        <FaQuoteRight />
      </div>
    </div>
  );
};
