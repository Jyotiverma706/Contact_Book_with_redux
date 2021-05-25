import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./AddContact.css";

function AddContact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const detail = { name: name, phone: phone, email: email };
  console.log(detail);
  function getName() {
    setName(event.target.value);
  }
  function getPhone() {
    setPhone(event.target.value);
  }
  function getEmail() {
    setEmail(event.target.value);
  }
  function Submit() {
    dispatch({ type: "ADD_CONTACT", payload: detail });
  }
  return (
    <div className="Two">
      <input
        type="text"
        placeholder="Enter Name"
        className="oneInput"
        onChange={getName}
      />
      <br></br>
      <input
        type="number"
        placeholder="Enter Phone Number"
        className="twoInput"
        onChange={getPhone}
      />
      <br></br>
      <input
        type="email"
        placeholder="Enter Email"
        className="threeInput"
        onChange={getEmail}
      />
      <br />
      <br />
      <button className="oneBtn" onClick={Submit}>
        <Link to="/">Add</Link>
      </button>
      <button className="oneBtn">
        <Link to="/">Back</Link>
      </button>
      <button className="oneBtn">Clear</button>
    </div>
  );
}
export default AddContact;
