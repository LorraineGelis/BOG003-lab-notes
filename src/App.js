import "./App.css";
import { AuthProvider } from "./context/Autcontext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/Login.jsx";
import Register from "./components/Register.jsx";
//import WallNotes from "./componets/WallNotes";
//import { PrivateRoute } from "./componets/PrivateRoute"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {auth}  from "./firebase/firebaseconfig";

function App() {
  return (
    <>
      <AuthProvider
        auth={auth}
        signInWithEmailAndPassword={signInWithEmailAndPassword} 
        createUserWithEmailAndPassword={createUserWithEmailAndPassword}
        signOut={signOut}
        onAuthStateChanged={onAuthStateChanged}>
        <Router>
          <Switch>
            { <Route exact path="/" component={LogIn} />}
            <Route path="/register" component={Register} />
           {/*  <PrivateRoute path="/wallNotes" component={WallNotes} /> */}
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
