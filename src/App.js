import{useState} from 'react';


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return(
    <>
      <div className="board-row" >
        <Square turn={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square turn={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square turn={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square turn={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square turn={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square turn={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square turn={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square turn={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square turn={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({turn,onSquareClick}){
  return (
    <button className = "square" onClick={onSquareClick}>
      {turn}
    </button>
  );
}
