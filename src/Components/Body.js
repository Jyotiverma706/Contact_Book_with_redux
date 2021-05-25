import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Body.css";

function Body() {
  const detail = useSelector((state) => state);
  const dispatch = useDispatch();
  function Delete(i) {
    detail.splice(i, 1);
    dispatch({ type: "DELETE_CONTACT", payload: detail });
  }
  const list = detail.map((xyz, i) => (
    <>
      <tr>
        <td>{xyz.name}</td>
        <td>{xyz.phone}</td>
        <td>{xyz.email}</td>
        <td>
          <button>
            <Link to={"/EditContact/" + i}>Edit</Link>
          </button>
        </td>
        <td>
          <button onClick={() => Delete(i)}>
            <Link to="/">Delete</Link>
          </button>
        </td>
      </tr>
    </>
  ));
  return (
    <div className="oneDiv">
      <table className="oneTable">
        <tr>
          <th>Name</th>
          <th>PhoneNumber</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {list}
      </table>
    </div>
  );
}
export default Body;
