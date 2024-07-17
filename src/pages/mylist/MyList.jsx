import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import Datatable from "../../components/datatable/Datatable";
import Widget from "../../components/widget/Widget";

const MyList = ({columns}) => {
  return (
    <div className="myList">
      <Sidebar />
      <div className="myListContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="category" />
        </div>
        <div className="table">
          <MyDatatable columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default MyList;