import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from './axios-users';

import Layout from './hoc/Layout/Layout';
import UserLists from './containers/UserLists/UserLists';
import UserProfile from './containers/UserProfile/UserProfile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showLoader: true
    }
  }

  componentDidMount() {
    axios.get('users.json')
      .then(response => {
        const { data: { users } } = response;
        this.setState({ users });
      })
      .finally(() => {
        this.setState({ showLoader: false })
      })
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/user/:id">
            <UserProfile users={this.state.users} />
          </Route>
          <Route path="/">
            <UserLists users={this.state.users} fetching={this.state.showLoader} />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
