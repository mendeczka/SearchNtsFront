import React, { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Results } from "../Results/Results";
import { SearchContext } from "../../contexts/search.context";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="app">
          <Header />
          <br />
          <SearchBar />
          <br />
          <Results />
        </div>
      </SearchContext.Provider>
    </>
  );
};
