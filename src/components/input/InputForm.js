import React, { useState } from "react";
import { useContext, useRef } from "react";
import { BoardGameContext } from "../context/context";

function NewGame({ game }) {
  const { dispatchGames } = useContext(BoardGameContext);

  const [title, setTile] = useState("");
  const [author, setAuthor] = useState("");
  const [isValid, setIsValid] = useState(true);
  const newTitle = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim().length === 0 || author.trim().length === 0) {
          setIsValid(false);
          return;
        } else {
          dispatchGames({
            type: "ADD_GAME",
            game: { title, author },
          });

          setTile("");
          setAuthor("");
          setIsValid(true);
        }
      }}
      className='addgames__form'
    >
      <div>
        {!isValid && <p>Please enter valid valuse for title and author</p>}
        <input
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => {
            setTile(newTitle.current.value);
          }}
          ref={newTitle}
        />
      </div>
      <div>
        <input
          value={author}
          type='text'
          placeholder='Author'
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewGame;
