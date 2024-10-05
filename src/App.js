export default function Board() {
  return(
    <>
      <div className="board-row">
        <Square value= "" />
        <Square value= "" />
        <Square value= "" />
      </div>
      <div className="board-row">
        <Square value= "" />
        <Square value= "" />
        <Square value= "" />
      </div>
      <div className="board-row">
        <Square value= "" />
        <Square value= "" />
        <Square value= "" />
      </div>
    </>
  );
}

function Square({turn}){
  function handleClick(){
    console.log('clicked!');
  }
  return (
    <button 
      className="square"
      onclick={handleClick}
    >
      {turn}
    </button>
    );
}
