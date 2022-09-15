import React from "react";
import { AiOutlineStar } from "react-icons/ai"

const RatingsList = ({ rating }) => {
  return (
    <ul className={`ratings-list rating-${rating}`}>
      <li className="ratings-list-item">{<AiOutlineStar color="#555"/>}</li>
      <li className="ratings-list-item">{<AiOutlineStar color="#555"/>}</li>
      <li className="ratings-list-item">{<AiOutlineStar color="#555"/>}</li>
      <li className="ratings-list-item">{<AiOutlineStar color="#555"/>}</li>
      <li className="ratings-list-item">{<AiOutlineStar color="#555"/>}</li>
    </ul>
  )
}

export default RatingsList;