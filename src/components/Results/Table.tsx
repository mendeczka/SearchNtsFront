import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/search.context";
import { SimpleAdEntity } from "types";
import { TableRow } from "./TableRow";
import "./Table.css";

export const Table = () => {
  const { search } = useContext(SearchContext);
  const [products, setProducts] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3001/ad/search/${search}`);
      const data = await response.json();

      setProducts(data);
    })();
  }, [search]);

  return search === "" ? null : (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol sklepu</th>
            <th>Nazwa sklepu</th>
            <th>Symbol towaru</th>
            <th>Nazwa towaru</th>
            <th>Cena netto</th>
            <th>Cena brutto</th>
            <th>Ilość</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

/*
*
*
  // return (
  //   // <div style={{ maxWidth: "100%" }}>
  //   <Box sx={{ height: "100%", width: "100%" }}>
  //     {products.map((product) =>
  //       search === "" ? null : (
  //         <DataGrid
  //           key={product.id}
  //           columns={columns}
  //           rows={[product]}
  //           pageSize={15}
  //           rowsPerPageOptions={[15]}
  //         />
  //       )
  //     )}
  //   </Box>
  // );
*/
