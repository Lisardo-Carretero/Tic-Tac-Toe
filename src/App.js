export default function Board() {
  return(
    <>
      <div className="board-row">
        <DrawTurn value= "" />
        <DrawTurn value= "" />
        <DrawTurn value= "" />
      </div>
      <div className="board-row">
        <DrawTurn value= "" />
        <DrawTurn value= "" />
        <DrawTurn value= "" />
      </div>
      <div className="board-row">
        <DrawTurn value= "" />
        <DrawTurn value= "" />
        <DrawTurn value= "" />
      </div>
    </>
  );
}

function DrawTurn({turn}){
  return <button className="square">{turn}</button>;
}
