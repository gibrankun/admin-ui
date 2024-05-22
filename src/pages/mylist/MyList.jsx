import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import Widget from "../../components/widget/Widget";

const MyList = () => {
  return (
    <div className="myList">
      <Sidebar />
      <div className="myListContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="table">
          <MyDatatable title="All Data" />
        </div>
      </div>
    </div>
  );
};

export default MyList;