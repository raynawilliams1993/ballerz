import React from 'react';

import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";



import Players from "./pages/Players";
import Team from "./pages/Team";
import Fantasy from "./pages/Team";
import Footer from "./components/Footer";



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
  
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
           <Nav className="ml-auto">
             <Link className="nav-link" to="/">Team</Link>
             <Link className="nav-link" to="/Players">Players</Link>
             <Link className="nav-link" to="/Fantasy">Fantasy Team</Link>
  
           </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={()=> <Team title={this.state.Team.title} subTitle={this.state.Team} text={this.state.Team} />} />
        <Route path="/Players" exact render={()=> <Players title={this.state.Players.title} />} />
  
        <Route path="/Fantasy" exact render={()=> <Fantasy title={this.state.Fantasy.title} />} />
           <Footer/>
        
      </Container>
  
    </Router>
    );
  }
}

export default App;
