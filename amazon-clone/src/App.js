import React, { useEffect } from "react";
import "./App.css";
import routes from './Components/routes';
import Header from "./Components/Header";
import { useStateValue } from "./ContextAPI/StateProvider";
import { auth } from "./Components/Firebase";



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

return (
  
    <div className="app">
        <Header />
        {routes}
    </div>
  
  );
}
export default App;
