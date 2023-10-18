import React from 'react'

export default function Block({val, coord, onBlockClick}: {
    val: string | null,
    coord: number,
    onBlockClick(coord:number): void
}) {

  return (
    <button onClick={()=>onBlockClick(coord)}className="border-2 h-24 text-7xl font-extralight	">{val}</button>
  )
}
