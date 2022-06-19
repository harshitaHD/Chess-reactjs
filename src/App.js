import React, { useState, useEffect, useRef } from 'react'
import "./App.css"
import ChessBoard from "chessboardjsx";
import {Chess} from "chess.js"

const App = () => {

  const[fen, setFen] = useState("start")

  let game = useRef(null)

  useEffect( (  )=>{
    game.current = new Chess();
  }, [])

  const onDrop = ( { sourceSquare, targetSquare } ) =>{
    let move = game.current.move( {
      from : sourceSquare,
      to: targetSquare
    } )

    // invalid moves
    if (move == null)
      return;

    setFen(game.current.fen())

  }

  const resetGame = () =>{
    game.current.clear();
    game.current.reset();
    setFen("start")
  }

  return (
    <>

    {
  
      game.current && game.current.game_over() ?<div> <div className='gamediv'>
      <h1>GAME OVER</h1>
      </div>
      <div class="gamediv"><button
      onClick={resetGame}
      >Re-match</button></div>
      </div>:
      <span></span>
    }

    <div className='container'>

      <ChessBoard  position= {fen}
      onDrop = {onDrop}
      />
    </div>
    </>
  )
}

export default App
