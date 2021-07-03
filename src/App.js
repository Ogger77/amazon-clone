import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./state/StateProvider";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER is:", authUser);
      if (authUser) {
        // the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  the user ogged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>

          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
