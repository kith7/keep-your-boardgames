import React, { useContext } from "react";
import BoardGameItem from "./BoardGameItem";
import { BoardGameContext } from "../context/context";

function BoardGameList(props) {
  const { games } = useContext(BoardGameContext);
  return games.length ? (
    <div className='items'>
      <ul>
        {games.map((game) => (
          <BoardGameItem id={game.id} key={game.id} game={game} />
        ))}
      </ul>
    </div>
  ) : (
    <div className='items'> Add games to your list with the form below</div>
  );
}

export default BoardGameList;
