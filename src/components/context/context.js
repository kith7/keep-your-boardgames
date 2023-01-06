import React, { createContext, useReducer, useEffect } from "react";
// import { nanoid } from "nanoid";
import { gamesReducer } from "../reducers/gamesReducer";

export const BoardGameContext = createContext();

const BoardGameContextProvider = (props) => {
  //   const [games, dispatchGames] = useReducer(
  //     gamesReducer,
  //     JSON.parse(localStorage.getItem("boardgames"))
  //   );
  const [games, dispatchGames] = useReducer(gamesReducer, [], () => {
    return JSON.parse(localStorage.getItem("boardgames") || []);
  });

  //   const [games, setGames] = useState(
  //     JSON.parse(localStorage.getItem("boardgames"))
  //   );

  useEffect(() => {
    localStorage.setItem("boardgames", JSON.stringify(games));
  }, [games]);

  //   const addGame = (title, author) => {
  //     setGames((game) => {
  //       return [...games, { title: title, author: author, id: nanoid() }];
  //     });
  //   };
  //   const removeGame = (id) => {
  //     setGames(games.filter((game) => game.id !== id));
  //   };
  return (
    <BoardGameContext.Provider value={{ games, dispatchGames }}>
      {props.children}
    </BoardGameContext.Provider>
  );
};
export default BoardGameContextProvider;
