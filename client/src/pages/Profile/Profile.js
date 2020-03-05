import React, { Component } from "react";
//  import "./Profile.scss";
import { Button, Navbar } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API";
import Hero from "../../components/Hero/Hero";

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        return (
            <div className="profilePage">

                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                    </div>
                ) : (
                        <div className="noUser">
                            {!this.state.loading ? (
                                <>
                                    <h1>please log in</h1>
                                    <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                                </>
                            ) : (
                                    <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                                )}

                        </div>
                    )}
                <Navbar>

                    <Link className="nav-link" to="/Home">Team</Link>
                    <Link className="nav-link" to="/players">Players</Link>
                    <Link className="nav-link" to="/Fantasy">Fantasy Team</Link>
                </Navbar>
                {/* <Hero backgroundImage="https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/02/top100_feature.jpg"></Hero> */}
                <Hero />
            </div>
        )
    }
}


export default Profile;