import React from 'react';

import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";


import Players from "./pages/Players";
import Team from "./pages/Team";
import Fantasy from "./pages/Team";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch/NoMatch";




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: `Ballers Yard`,
      headerLink: [
        { title: "Team", path: "/" },
        { title: "Players", path: "/Players" },
        { title: "Fantasy", path: "/Fantasy" }
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

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/Home">Team</Link>
                <Link className="nav-link" to="/players">Players</Link>
                <Link className="nav-link" to="/Fantasy">Fantasy Team</Link>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
          
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/Home" exact render={() => <Team title={this.state.Team.title} subTitle={this.state.team} text={this.state.Team} />} />
          <Route path="/Players" exact render={() => <Players title={this.state.Players.title} />} />
          <Route path="/Fantasy" exact render={() => <Fantasy title={this.state.Fantasy.title} />} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
            <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
            <Route exact path="/profile" component={Profile} />
         
          </Switch>
          <Footer />

        </Container>

      </Router>
    );
  }
}

export default App;
