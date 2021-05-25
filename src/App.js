import { createStore } from "redux";
import counterReducer from "./Reducer/Reducer";
import AddContact from "./Components/AddContact";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import EditContact from "./Components/EditContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

export default function App() {
  let store = createStore(counterReducer, composeWithDevTools());

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AddContact">
              <AddContact />
            </Route>
            <Route path="/EditContact/:id">
              <EditContact />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
