import React, { useContext } from "react";
import { SearchContext } from "../../contexts/search.context";
import "./Results.css";
import { Table } from "./Table";

export const Results = () => {
  const { search } = useContext(SearchContext);

  return (
    <>
      <h1>Wyszukujesz produkt:</h1>

      <p>{search.toUpperCase()}</p>
      <Table />
    </>
  );
};
