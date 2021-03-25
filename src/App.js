import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./user";
import Createuser from "./create-user";
import Edituser from "./edit-user";
import Profile from "./profile";
import { UserProvider } from "./user-context";



function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <UserProvider>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
          <Switch>
          <Route path="/" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/user" exact="true">
          <Users></Users>
          </Route>
          <Route path="/create-user" exact="true">
          <Createuser></Createuser>
          </Route>
          <Route path="/edit-user/:id" component={Edituser} exact="true"></Route>
          <Route path="/profile/:id" component={Profile} exact="true"></Route>
          
          </Switch>  
          </div>
        </div>
      </div>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
