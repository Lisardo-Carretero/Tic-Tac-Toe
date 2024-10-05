import{useState} from 'react';


export default function Board() {
  return(
    <>
      <div className="board-row">
        <Square turn= "1" />
        <Square turn= "2" />
        <Square turn= "3" />
      </div>
      <div className="board-row">
        <Square turn= "4" />
        <Square turn= "5" />
        <Square turn= "6" />
      </div>
      <div className="board-row">
        <Square turn= "7" />
        <Square turn= "8" />
        <Square turn= "9" />
      </div>
    </>
  );
}

function Square( ){
  const [turn, setTurn] = useState("")
  function handleClick(){
    console.log('clicked!');
    setTurn('X');
  }
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {turn}
    </button>
    );
}
