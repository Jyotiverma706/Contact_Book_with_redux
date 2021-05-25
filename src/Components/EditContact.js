import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Edit.css";

function EditContact() {
  const details = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState(details[id].name);
  const [phone, setPhone] = useState(details[id].phone);
  const [email, setEmail] = useState(details[id].email);
  details[id] = { name: name, phone: phone, email: email };
  function getName(Event) {
    setName(Event.target.value);
  }
  function getPhone(Event) {
    setPhone(Event.target.value);
  }
  function getEmail(Event) {
    setEmail(Event.target.value);
  }
  function submit() {
    dispatch({ type: "EDIT_CONTACT", payload: details });
  }

  return (
    <div className="oneEdit">
      Name :{" "}
      <input
        type="text"
        className="input"
        onChange={getName}
        defaultValue={details[id].name}
      />
      <br />
      Phone-Number :{" "}
      <input
        type="number"
        className="input"
        onChaneg={getPhone}
        defaultValue={details[id].phone}
      />
      <br />
      Email-Address :{" "}
      <input
        type="email"
        className="input"
        onChange={getEmail}
        defaultValue={details[id].email}
      />
      <button className="editBtn" onClick={submit}>
        <Link to="/">Edit</Link>
      </button>
      <button className="editBtn">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
export default EditContact;
