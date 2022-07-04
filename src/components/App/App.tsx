import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";

export const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <SearchBar />
      </div>
    </>
  );
};
