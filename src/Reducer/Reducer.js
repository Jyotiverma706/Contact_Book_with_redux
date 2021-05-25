const Contact = [
  {
    name: "Ramesh",
    phone: 8565985460,
    email: "ramesh@gmail.com"
  }
];

function counterReducer(state = Contact, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "EDIT_CONTACT":
      return [...action.payload];
    case "DELETE_CONTACT":
      return [...action.payload];
    default:
      return state;
  }
}
export default counterReducer;
