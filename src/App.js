import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import BoardGameList from "./components/list/BoardGameList";
import BoardGameContextProvider from "./components/context/context";
import NewGame from "./components/input/InputForm";

function App() {
  return (
    <BoardGameContextProvider>
      <div className='App'>
        <Header />
        <BoardGameList />
        <NewGame />
      </div>
    </BoardGameContextProvider>
  );
}

export default App;
