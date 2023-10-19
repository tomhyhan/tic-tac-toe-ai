"use client";

import { useState } from "react"
import Block from "./component/block";
import { nextBestMove } from './lib/utils';

export default function Home() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState("human")
    
    const handleBlockClick = (coord: number) => {
        const newBoard = [...board]
        newBoard[coord] = "X"
        setBoard(newBoard)
        setTurn("computer")
    }

    if (turn == "computer") {
        const newBoard = [...board]
        const bestMove = nextBestMove(newBoard)
        newBoard[bestMove] = "O"
        setBoard(newBoard)
        setTurn("human")
    }
    

  return (
    <main >
        <div className="grid grid-cols-3 w-3/4">
            {board.map((val, coord) => <Block key={coord} val={val} coord={coord} onBlockClick={handleBlockClick}/>)}
        </div>
    </main>
    )
}
