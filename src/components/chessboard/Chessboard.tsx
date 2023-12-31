import React, { useRef } from "react";
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
  const chessboardRef = useRef<HTMLDivElement>(null)

  let activePiece: HTMLElement | null = null;

  function grabPiece(e: React.MouseEvent){
    const element = e.target as HTMLElement;
    if(element.classList.contains('chess-piece')) {
      const x = e.clientX -40;
      const y = e.clientY -40;
      element.style.position = 'absolute'
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 30;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 60;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 65;

      const x = e.clientX -40;
      const y = e.clientY -40;
      activePiece.style.position = 'absolute'

      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`
      } else {
        activePiece.style.left = `${x}px`
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`
      } else {
        activePiece.style.top = `${y}px`
      }
  
    }
  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = null
    }
  }

  let board = [];

  // eslint-disable-next-line no-lone-blocks
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

      board.push(<Tile key={`${j},${i}`} image={image} number={number}/>)
    }
  }
 
  return (
    <>
      <div 
        onMouseMove={(e) => movePiece(e)} 
        onMouseDown={e => grabPiece(e)} 
        onMouseUp={e => dropPiece(e)}
        id="chessboard"
        ref={chessboardRef}
      >
        {board}
      </div>
    </>
  );
};

export default Chessboard;
