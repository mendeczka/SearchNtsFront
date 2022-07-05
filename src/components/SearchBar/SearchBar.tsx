import React, { SyntheticEvent, useContext, useState } from "react";
import { Btn } from "../common/Btn";
import "./SearchBar.css";
import { SearchContext } from "../../contexts/search.context";

export const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(search);

  const handleLocalSetSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearch(inputValue);
  };

  return (
    <>
      <form className="div-search" onSubmit={handleLocalSetSearch}>
        <label htmlFor="header-search">
          <span className="visually-hidden">Znajdź produkt</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Znajdź produkt"
          name="s"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Btn text="Wyszukaj" />
      </form>
    </>
  );
};
