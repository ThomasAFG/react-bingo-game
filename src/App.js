import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Table from "./components/table/Table";
import "./styles.css";

export default function App() {
  const [squares, setSquares] = useState(
    Array.from(Array(75)).map((_, idx) => {
      return { id: idx + 1, state: false };
    })
  );
  const [currentSorted, setCurrentSorted] = useState(0);

  const sample = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const sortNumber = () => {
    const newSorted = sample(
      squares.filter((square) => square.state === false)
    );
    if (newSorted) {
      setCurrentSorted(newSorted.id);
      setSquares((prevState) =>
        prevState.map((square) => {
          if (square.id === newSorted.id) {
            return { ...square, state: true };
          } else {
            return square;
          }
        })
      );
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="sorter">
          <div className="current">{currentSorted}</div>
          <button className="btn" onClick={sortNumber}>
            Sortear
          </button>
        </div>
        <Table squares={squares} />
      </div>
    </div>
  );
}
