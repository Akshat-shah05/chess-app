import React from 'react'
import './tile.css'


interface Props {
    image?: string;
    number: number;
}

export default function Tile({ number, image }: Props) {
    
    if (number%2===0) {
        return (
        <div className="tile green-tile">
            <img src={image}></img>
        </div>)
    } 
    else {
        return (
        <div className="tile white-tile">
            <img src={image}></img>
        </div>)
    }   
    
    
}
