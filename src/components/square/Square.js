import React from "react";
import "./square.css";

export default function Square({ square }) {
  if (square.state === true) {
    return <div className="square sorted">{square.id}</div>;
  } else {
    return <div className="square">{square.id}</div>;
  }
}
