import { Link } from "react-router-dom";
import "./Header.css";
// import AddContact from "./AddContact";
function Header() {
  return (
    <div className="one">
      <h1 className="oneHeader">Contact-Book</h1>
      <button className="twoHeader">
        <Link to="/AddContact">Add Contact </Link>
      </button>
    </div>
  );
}
export default Header;
