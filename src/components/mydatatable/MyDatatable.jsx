import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Non Coffee" },
  { id: 3, name: "Cake" },
  { id: 4, name: "Pastry" },
  { id: 5, name: "Cookie" },
  { id: 6, name: "Candy" },
  { id: 7, name: "Rice" },
  { id: 8, name: "Pasta" },
  { id: 9, name: "Salad" },
  { id: 10, name: "Steak" },
];

const MyDatatable = ({ title }) => {
  return (
    <div className="myDatatable">
      <div className="myDatatableTitle">{title}</div>
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