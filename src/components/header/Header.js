import React, { useContext } from "react";

import { BoardGameContext } from "../context/context";

const Header = () => {
  const { games } = useContext(BoardGameContext);
  return (
    <div className='app'>
      <h1>Kith's boardgame list</h1>
      <p>Currently you have {games.length} boardgames</p>
    </div>
  );
};

export default Header;
