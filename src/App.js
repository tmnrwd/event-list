import React from 'react';
import EventList from './EventList'
import { ApiClient } from './ApiClient'
import Login from './Login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem("token"),
    }
    this.client = new ApiClient(
      () => this.state.token, () => this.logout() 
      )
  }

  login(token) {
    window.localStorage.setItem("token", token);
    this.setState({ token })
  }

  logout = (token) => {
    this.setState({ token: undefined })
    window.localStorage.removeItem("token");
  }

 render() {
    if (this.state.token) {
    return <EventList client={this.client} logout={this.logout} /> }
    return <Login loggedIn={(token) => this.login(token)} client={this.client} ></Login>
  }
}

export default App;
