import React from 'react';

import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "reactstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";



import Players from "./pages/Players";
import Team from "./pages/Team";
import Fantasy from "./pages/Fantasy";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch/NoMatch";
import Hero from "./components/Hero/Hero";
import players from "./components/CurrentYear.json";






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
      players: players,

      Fantasy: {
        title: "",
      },
      Players: {
        title: "",
      },
      player: "",
      
      fantasyPlayers: []
   

      
     
    } 
    }
    
     handleClick = (e, id) => {
      e.preventDefault();
      const player = this.state.players.find(player => player.id === id);
      
      this.setState( {fantasyPlayers: [...this.state.fantasyPlayers, player ]});
    };
  
  

  render() {

    return (
      <Router>
        
      
        <Container className="p-o" fluid={true}>
          <Hero backgroundImage="https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/02/top100_feature.jpg">
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand  >NBA ALL Star</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">

              {Auth.loggedIn ? (
                <Nav className="ml-auto">

                 
                  
              </Nav>
                  ):(
                    
                    <Nav className="ml-auto" color="white" >
                  
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    {/* <Link className="nav-link" to="/profile">Profile</Link> */}

                  </Nav>
                  )}
    
    
            </Navbar.Collapse>
          </Navbar>
                  </Hero>
            <Route path="/Home" exact render={() => <Team title={this.state.Team.title} subTitle={this.state.team} text={this.state.Team} />} />
            <Route path="/Players" exact render={() => <Players handleClick={this.handleClick} players={this.state.players} title={this.state.Players.title} />} />
            <Route path="/Fantasy" exact render={() => <Fantasy fantasyPlayers={this.state.fantasyPlayers} title={this.state.Fantasy.title} />} />
          

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />

            </Switch>

        </Container>
            <Footer />

      </Router>
        );
      }
    }
    
    
    export default App;
