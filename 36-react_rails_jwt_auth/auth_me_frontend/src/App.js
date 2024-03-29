import React from "react";
import "./App.css";
import api from "./util/api";

import LoginComponent from "./LoginComponent";
import Posts from "./Posts";

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    password: "",
    posts: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  getPosts = () => {
    const token = localStorage.getItem("token");
    api.getPosts(token).then(posts => {
      if (posts.error) {
        alert("i am not sure you're logged in");
      } else {
        this.setState({ posts }, () => console.log(this.state.posts));
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ username: "", password: "" });
      } else {
        // localStorage.setItem("token", data.jwt);
        localStorage.token = data.jwt;
        this.setState({ logged_in: true, username: data.username });
      }
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: "",
      posts: []
    });
  };

  render() {
    console.log(this.state.logged_in);
    return (
      <div className="App">
        <h1>React Auth</h1>
        <LoginComponent
          logged_in={this.state.logged_in}
          onLoginClicked={this.onLoginClicked}
          handleLogOut={this.handleLogOut}
          username={this.state.username}
          handleChange={this.handleChange}
          getPosts={this.getPosts}
          password={this.state.password}
        />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
