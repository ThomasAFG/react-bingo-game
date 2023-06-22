import React from "react";
import "./table.css";
import Square from "../square/Square";

export default function Table({ squares }) {
  return (
    <div className="table">
      {squares.map((square) => {
        return <Square square={square} />;
      })}
    </div>
  );
}
