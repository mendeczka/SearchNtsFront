import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/search.context";

export const Results = () => {
  const { search } = useContext(SearchContext);

  useEffect(() => {
    console.log("Make request to search for", search);
  }, [search]);

  return (
    <>
      <h1>Search for:{search}</h1>
      test
    </>
  );
};
