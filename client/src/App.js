import React from 'react';

function App() {
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
      <Route path="/" exact render={()=> <Team title={this.state.team.title} subTitle={this.state.team} text={this.state.team} />} />
      <Route path="/Players" exact render={()=> <Players title={this.state.Players.title} />} />

      <Route path="/Fantasy" exact render={()=> <Fantasy title={this.state.Fantasy.title} />} />
         <Footer/>
      
    </Container>

  </Router>
  );
}

export default App;
