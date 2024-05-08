import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./mydatatable.scss";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, Name: "Americano"},
  { id: 2, Name: "Robusta"},
  { id: 3, Name: "Arabika"},
  { id: 4, Name: "Vietnam Drips"},
  { id: 5, Name: "Cappucino"},
  { id: 6, Name: "Espreso"},
  { id: 7, Name: "Jamaica Blue Mountain"},
  { id: 8, Name: "Caramel Macchiato"},
  { id: 9, Name: "Kopi Bali"},
  { id: 10, Name: "Liberika"},
];

const MyDatatable = ({ title }) => {
  return (
    <div className="datatable">
      <div className="datatableTitle">All Data</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;