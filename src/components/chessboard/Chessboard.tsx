import React from "react";
import "./Chessboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];


const Chessboard = () => {
  let board = [];

  {/* Loop to produce the chessboard */}
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      number % 2 === 0
        ? board.push(<div className="tile green-tile"></div>)
        : board.push(<div className="tile white-tile"></div>);
    }
  }

  let hLabel = [];
  let vLabel = [];

  for (let i = 0; i<horizontalAxis.length; i++) {
    hLabel.push(<div className="tile-label green-tile">{horizontalAxis[i]}</div>)
  }

  for (let i = verticalAxis.length-1; i >= 0; i--) {
    vLabel.push(<div className="tile-label2 white-tile">{verticalAxis[i]}</div>)
  }

  return (
    <>
      <div id="chessboard-container">
        <div className="vertical-label">{vLabel}</div>
        <div className="c_n_l_container">
          <div id="chessboard">{board}</div>
          <div className="horizontal-label">{hLabel}</div>  
        </div>
      </div>
       
    </>
  );
};

export default Chessboard;
