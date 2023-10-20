"use client";

import { useState } from "react"
import Block from "./component/block";
import { draws, nextBestMove, wins } from './lib/utils';

export default function Home() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState("computer")
    const win = wins(board) 
    const draw = draws(board) 
    const end = win || draw

    const handleBlockClick = (coord: number) => {
        if (end) return;
        const newBoard = [...board]
        newBoard[coord] = "X"
        setTurn("computer")
        setBoard(newBoard)
    }

    if (turn == "computer") {
        const newBoard = [...board]
        const bestMove = nextBestMove(newBoard)
        newBoard[bestMove] = "O"
        setTurn("human")
        setBoard(newBoard)
    }
    

    
  return (
    <>
        {win && <div>{turn === "human"? "You Lose" : "You Won"}</div>}
        {draw && <div>draw<br /></div>}
        <main >
            <div className="grid grid-cols-3 w-3/4">
                {board.map((val, coord) => <Block key={coord} val={val} coord={coord} onBlockClick={handleBlockClick}/>)}
            </div>
        </main>
        {end && <button onClick={()=>setBoard(Array(9).fill(null))} className="border-2 p-2 rounded m-2">retry</button>}
    </>
    )
}
