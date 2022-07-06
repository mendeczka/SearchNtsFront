import React from "react";
import { SimpleAdEntity } from "types";

interface Props {
  product: SimpleAdEntity;
}

export const TableRow = (props: Props) => (
  <tr>
    <td>{props.product.SKLEP_NR}</td>
    <td>{props.product.SKLEP_NAZWA}</td>
    <td>{props.product.TOWAR_NR}</td>
    <th>{props.product.TOWAR_NAZWA}</th>
    <td>{props.product.CENA_SP_NETTO}</td>
    <td>{props.product.CENA_SP_BRUTTO}</td>
    <td>{props.product.STAN_MAG}</td>
  </tr>
);
