import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = (columns) => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, type),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
  
    return () => {
      unsub();
    };
  }, [type]); 




  return (
    <div className="datatable">
      <div className="datatableTitle">
        {type.toUpperCase()}
        <Link to={"/" + type + "/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
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

export default Datatable;
