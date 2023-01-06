import { nanoid } from "nanoid";

export const gamesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [
        ...state,
        { title: action.game.title, author: action.game.author, id: nanoid() },
      ];
    case "REMOVE_GAME":
      return state.filter((game) => game.id !== action.id);
    default:
      return state;
  }
};
