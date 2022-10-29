import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCards } from "./cardSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  const CardAppearance = () => {
    if (!flipped) {
      return <button className="card card-front" onClick={(e) => setFlipped(!flipped)} style={{background: "#400080"}}>{card.front}</button>
    } else {
      return <button className="card card-back" onClick={(e) => setFlipped(!flipped)} style={{background: "#800080"}}>{card.back}</button>
    }
  }

  return (
    <li className="card-outer">
      <CardAppearance />
    </li>
  );
}
