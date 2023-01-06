import React from "react";
import { useContext } from "react";
import { BoardGameContext } from "../context/context";

function BoardGameItem({ game }) {
  const { dispatchGames } = useContext(BoardGameContext);

  return (
    <li
      className='item--li'
      onClick={() => dispatchGames({ type: "REMOVE_GAME", id: game.id })}
    >
      <span>{game.title}</span>
      <span>{game.author}</span>
    </li>
  );
}

export default BoardGameItem;
