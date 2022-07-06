import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "SKLEP_NR", headerName: "Symbol sklepu" },
  { field: "TOWAR_NR", headerName: "Symbol towaru" },
  { field: "TOWAR_NAZWA", headerName: "Nazwa towaru" },
  { field: "CENA_SP_NETTO", headerName: "Cena netto" },
  { field: "CENA_SP_BRUTTO", headerName: "Cena brutto" },
  { field: "STAN_MAG", headerName: "Ilość dostępna" },
];
