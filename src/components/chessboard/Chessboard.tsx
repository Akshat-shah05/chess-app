import React from "react";
import "./Chessboard.css";
import Tile from '../tile/Tile';

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];


for(let p = 0; p < 2; p++){
  const type = (p === 0)? "b" : "w";
  const y = (p === 0)? 7 : 0;
  pieces.push({image: `assets/rook_${type}.png`, x: 0, y})
  pieces.push({image: `assets/rook_${type}.png`, x: 7, y})
  pieces.push({image: `assets/knight_${type}.png`, x: 1, y})
  pieces.push({image: `assets/knight_${type}.png`, x: 6, y})
  pieces.push({image: `assets/bishop_${type}.png`, x: 2, y})
  pieces.push({image: `assets/bishop_${type}.png`, x: 5, y})
  pieces.push({image: `assets/queen_${type}.png`, x: 3, y})
  pieces.push({image: `assets/king_${type}.png`, x: 4, y})

}

// loop for white and black pawns
for (let i = 0; i < 8; i++) {
  pieces.push({image: "assets/pawn_b.png", x: i, y: 6})
}

for (let i = 0; i < 8; i++) {
  pieces.push({image: "assets/pawn_w.png", x: i, y: 1})
}

// all 4 rooks

pieces.push({image: "assets/rook_w.png", x: 0, y: 0})
pieces.push({image: "assets/rook_w.png", x: 7, y: 0})

// all 4 knights

pieces.push({image: "assets/knight_w.png", x: 1, y: 0})
pieces.push({image: "assets/knight_w.png", x: 6, y: 0})

// all 4 bishops

pieces.push({image: "assets/bishop_w.png", x: 2, y: 0})
pieces.push({image: "assets/bishop_w.png", x: 5, y: 0})

// both queens

pieces.push({image: "assets/queen_w.png", x: 3, y: 0})

// both kings
pieces.push({image: "assets/king_w.png", x: 4, y: 0})


const Chessboard = () => {
  let board = [];

  {/* Loop to produce the chessboard */}
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;
      
      pieces.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      })

      board.push(<Tile image={image} number={number}/>)
    }
  }
 
  return (
    <>
      <div id="chessboard">{board}</div>
    </>
  );
};

export default Chessboard;
