import React from 'react';
import store from "./store";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Landing from "./components/pages/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

import Players from "./pages/Players";
import Team from "./pages/Team";
import Fantasy from "./pages/Team";
import Footer from "./components/Footer";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: `Ballers Yard`,
      headerLink: [
        { title: "Team", path: "/" },
        { title: "Players", path: "/players" },
        { title: "Fantasy", path: "/fantasy" }
      ],
        Team: {
        title: "",
        subTitle: "",
        text: ""
      },
        Players: {
        title: "",
      },
        Fantasy: {
        title: "", 
      }
    }
  }

  render() {

    return (
      <Router>
      <Container className="p-o" fluid={true}>
  
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Ballers Yard</Navbar.Brand>
  
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
           <Nav className="ml-auto">
             <Link className="nav-link" to="/">Team</Link>
             <Link className="nav-link" to="/players">Players</Link>
             <Link className="nav-link" to="/fantasy">Fantasy Team</Link>
  
           </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={()=> <Team title={this.state.Team.title} subTitle={this.state.team} text={this.state.Team} />} />
        <Route path="/Players" exact render={()=> <Players title={this.state.Players.title} />} />
  
        <Route path="/Fantasy" exact render={()=> <Fantasy title={this.state.Fantasy.title} />} />
           <Footer/>
        
      </Container>
  
    </Router>
    );
  }
}

export default App;
