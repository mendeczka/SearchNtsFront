import React from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <>
      <div className="div-search">
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Znajdź produkt</span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Znajdź produkt"
            name="s"
          />
          <button className="btn-search" type="submit">
            Wyszukaj
          </button>
        </form>
      </div>
    </>
  );
};
